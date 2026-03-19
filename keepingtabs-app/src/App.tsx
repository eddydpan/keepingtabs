import './App.css';
// import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import ExpensePage from './features/expenses/ExpensePage';
import TabsPage from './features/tabs/TabsPage';
import RequestExpensePage from './features/request-expense/RequestExpensePage';
import FriendsPage from './features/friends/FriendsPage';
import MePage from './features/me/MePage';
import LoginPage from './features/auth/LoginPage';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <ProtectedRoute><ExpensePage /></ProtectedRoute>
  },
  {
    path: "/tabs",
    element: <ProtectedRoute><TabsPage /></ProtectedRoute>
  },
  {
    path: "/request-expense",
    element: <ProtectedRoute><RequestExpensePage /></ProtectedRoute>
  },
  {
    path: "/friends",
    element: <ProtectedRoute><FriendsPage /></ProtectedRoute>
  },
  {
    path: "/me",
    element: <ProtectedRoute><MePage /></ProtectedRoute>
  }
])

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
