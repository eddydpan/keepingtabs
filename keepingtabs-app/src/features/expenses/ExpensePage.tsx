import { useEffect, useState } from 'react'
import SearchBar from "../../components/SearchBar"
import { supabase } from '../../lib/supabase'
import type { Tables } from '../../types/database.types'

export type ExpenseRow = Tables<'expenses'>

export async function getExpensesForCurrentUser(): Promise<ExpenseRow[]> {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as ExpenseRow[]
}

const ExpenseCard = ({
  name,
  time,
  note,
  amount,
}: {
  name: string
  time: string
  note: string | null
  amount: number | null
}) => {
  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="flex flex-row">
        <div className="h-15 w-15 bg-gray-300 rounded-full mr-2"></div>
        <div className="flex flex-col items-start">
        <p className="text-[15px] font-bold">{name}</p>
        <p className="text-xs mt-0 mb-0">{time}</p>
        <p className="text-[15px]">{note}</p>
      </div>
      </div>
      <p className={`text-[15px] font-medium ${Number(amount) < 0 ? 'text-red-500' : ''}`}>
        ${Number(amount ?? 0).toFixed(2)}
      </p>
    </div>
  )
}

const ExpensePage = () => {
  // DUMMY DATA
  // return (
  //   <div className="m-8">
  //     <SearchBar />
  //     <ExpenseCard name="John Doe" time="2 hours ago" note="Lunch with team" amount={25.5} />
  //     <ExpenseCard name="Jane Deer" time="3 days ago" note="Dinner" amount={-25.5} />

  //   </div>

  // )
  const [expenses, setExpenses] = useState<ExpenseRow[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    ;(async () => {
      try {
        const rows = await getExpensesForCurrentUser()
        if (!mounted) return
        setExpenses(rows)
      } catch (err) {
        if (!mounted) return
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        if (mounted) setIsLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  if (isLoading) return <div className="m-8">Loading expenses...</div>
  if (error) return <div className="m-8">Error: {error}</div>

  return (
    <div className="m-8">
      <SearchBar />
      {expenses.length === 0 ? (
        <p className="mt-4">No expenses yet.</p>
      ) : (
        expenses.map((e) => (
          <ExpenseCard
            key={e.transaction_id}
            name={e.member_user_id ?? e.host_user_id ?? 'Unknown'}
            time={new Date(e.created_at).toLocaleString()}
            note={e.note}
            amount={e.amount}
          />
        ))
      )}
    </div>
  )
}

export default ExpensePage