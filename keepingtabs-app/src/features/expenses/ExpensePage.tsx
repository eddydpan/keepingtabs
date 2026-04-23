// import React from 'react'
import SearchBar from "../../components/SearchBar"

const ExpenseCard = ({name, time, note, amount}:{name: string, time: string, note: string, amount: number}) => {
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
      <p className={`text-[15px] font-medium ${amount < 0 ? 'text-red-500' : ''}`}>
        ${amount}
      </p>
    </div>
  )
}

const ExpensePage = () => {
  return (
    <div className="m-8">
      <SearchBar />
      <ExpenseCard name="John Doe" time="2 hours ago" note="Lunch with team" amount={25.5} />
      <ExpenseCard name="Jane Deer" time="3 days ago" note="Dinner" amount={-25.5} />

    </div>

  )
}

export default ExpensePage