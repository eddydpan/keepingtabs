import './App.css';
import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import ExpensePage from './features/expenses/ExpensePage';
import TabsPage from './features/tabs/TabsPage';
import RequestExpensePage from './features/request-expense/RequestExpensePage';
import FriendsPage from './features/friends/FriendsPage';
import MePage from './features/me/MePage';
import LoginPage from './features/auth/LoginPage';


import { Outlet } from "react-router-dom";

  // Layout component that includes the NavBar and an Outlet for rendering child routes
  const NavAppLayout = () => {
    return (
      <div className="flex flex-col min-h-screen border-2 border-black-500">
        {/* <ul>
          {users.map((user) => (
            <li key={user.user_id}>{user.user_id}</li>
          ))}
        </ul> */}
        <main className="flex-1">
          <Outlet />
        </main>
        <NavBar />
      </div>
    );
  };

  // Define app routes
  const router = createBrowserRouter([
    {
      element: <NavAppLayout />,   // layout WITH nav
      children: [
        { index: true, element: <ProtectedRoute><ExpensePage /></ProtectedRoute> },   // "/"
        { path: "tabs", element: <ProtectedRoute><TabsPage /></ProtectedRoute> },
        { path: "friends", element: <ProtectedRoute><FriendsPage /></ProtectedRoute> },
        { path: "me", element: <ProtectedRoute><MePage /></ProtectedRoute> },
      ],
    },

    // route WITHOUT nav
    {
    path: "/login", // default route for unauthenticated users
    element: <LoginPage />
    },
    {
      path: "request-expense",
      element: <ProtectedRoute><RequestExpensePage /></ProtectedRoute>,
    },
  ]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
