import './App.css';
// import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpensePage from './features/expenses/ExpensePage';
import TabsPage from './features/tabs/TabsPage';
import RequestExpensePage from './features/request-expense/RequestExpensePage';
import FriendsPage from './features/friends/FriendsPage';
import MePage from './features/me/MePage';

function App() {

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
      <RouterProvider router = {router} />
      {/* <div className='absolute bottom-0 left-0'>
        <NavBar />
      </div> */}
    </>
  )
}

export default App
