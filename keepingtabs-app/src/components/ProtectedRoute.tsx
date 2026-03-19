import {Navigate} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';
import type { ReactNode } from 'react';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth(); // Your custom hook using Supabase
  
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  return children;
}

export default ProtectedRoute