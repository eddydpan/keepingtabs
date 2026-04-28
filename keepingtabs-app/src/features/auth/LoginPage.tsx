import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/', { replace: true })
    }
  }, [isLoading, user, navigate])

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    // Magic Link Login
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Redirect back to the public login route first, then forward after session is ready.
        emailRedirectTo: `${window.location.origin}/login`,
      },
    })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for the login link!')
    }
    
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
      <h1 className="text-2xl font-bold mb-4">Login or Register</h1>
      <p className="mb-6 text-gray-600 text-center max-w-sm">
        Sign in via magic link with your email below. No password required.
      </p>

      <form onSubmit={handleLogin} className="flex flex-col w-full max-w-sm gap-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {loading ? 'Sending link...' : 'Send magic link'}
        </button>
      </form>

      {message && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-center text-sm">
          {message}
        </div>
      )}
    </div>
  )
}