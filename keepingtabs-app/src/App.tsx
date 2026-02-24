import './App.css';
// import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpensePage from './features/expenses/ExpensePage';
import TabsPage from './features/tabs/TabsPage';
import RequestExpensePage from './features/request-expense/RequestExpensePage';
import FriendsPage from './features/friends/FriendsPage';
import MePage from './features/me/MePage';
import { useEffect, useState } from 'react'
import { createClient } from "@supabase/supabase-js"; 
import type { Database } from "./types/database.types";

import './App.css'
import NavBar from './components/NavBar';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

type User = Database["public"]["Tables"]["users"]["Row"];

function App() {
  const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
      getUsers();
    }, []);

  const getUsers = async () => {
    // TODO: This query fetches all users — scope this to relevant users once auth is set up
    const { data, error } = await supabase.from("users").select("*");
    console.log("data:", data);
    console.log("error:", error);
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data);
    }
  };

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ExpensePage />
    },
    {
      path: "/tabs",
      element: <TabsPage />
    },
    {
      path: "/request-expense",
      element: <RequestExpensePage />
    },
    {
      path: "/friends",
      element: <FriendsPage />
    },
    {
      path: "/me",
      element: <MePage />
    }
  ])

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.user_id}</li>
        ))}
      </ul>
      <RouterProvider router = {router} />
      {/* <div className='absolute bottom-0 left-0'>
        <NavBar />
      </div> */}
    </>
  )
}

export default App
