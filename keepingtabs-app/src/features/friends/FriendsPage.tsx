// import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from "../../components/NavBar"
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import type { Database } from "../../types/database.types"

type UserRow = Database["public"]["Tables"]["users"]["Row"]

const FriendsPage = () => {
  const { user } = useAuth()
  const [users, setUsers] = useState<UserRow[]>([])

  useEffect(() => {
    // Only fetch if we have a valid authenticated user
    if (!user) return

    const fetchOtherUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .neq('user_id', user.id) // Filter out the current user

      if (error) {
        console.error("Error fetching users:", error)
      } else {
        setUsers(data || [])
      }
    }

    fetchOtherUsers()
  }, [user]) // This effect re-runs if `user` ever changes

  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users to Add</h1>
      <ul>
        {users.map((u) => (
          <li key={u.user_id} className="mb-2">
            {/* Show email or name depending on your database schema */}
            {u.user_id} 
          </li>
        ))}
      </ul>
    </div>
    
    <div className='absolute bottom-0 left-0 w-full'>
        <NavBar />
    </div>
    </>
  )
}

export default FriendsPage