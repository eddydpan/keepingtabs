import { useState } from 'react'
import { createClient } from "@supabase/supabase-js"; 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {

  return (
    <>
      <div className='absolute bottom-0 left-0'>
        <NavBar />
      </div>
    </>
  )
}

export default App
