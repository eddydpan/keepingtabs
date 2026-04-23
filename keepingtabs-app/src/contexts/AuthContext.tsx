import { createContext, useContext, useEffect, useState } from 'react'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { createDevUser, isDevAuthBypassEnabled } from '../lib/DevBypass'
/*
Without this context, we would have desync between Supabase state and what's 
rendered on the screen. For example, if a usser logs out, React will not know
to re-render the app with the logged-out state. This context asynchronously 
listens for auth changes and updates the app state.
*/


// Define the shape of our context
type AuthContextType = {
  session: Session | null
  user: User | null
  isLoading: boolean
}

// Create the context
const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
})

// Provider component that wraps the app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Use Dev Bypass
    if (isDevAuthBypassEnabled) {
      setSession(null)
      setUser(createDevUser())
      setIsLoading(false)
      return
    }

    // 1. Get current session on initial load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    // 2. Listen for auth changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setIsLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ session, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to easily use the auth context
export const useAuth = () => {
  return useContext(AuthContext)
}


