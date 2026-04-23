// import React from "react"
import { useLocation, useNavigate } from "react-router-dom";
import EditIcon from '../assets/edit-icon.svg';


// Text & Icon button component for the NavBar
const NavButton = ({ text, icon, active, onClick }: { text: string, icon: string, active: boolean, onClick: () => void }) => {
    return (
        <>
            <div onClick={onClick} className='flex flex-col items-center justify-center'>
                <img className={`"w-4" ${active ? 'text-blue-500' : 'text-gray-500'}`} src={icon} />
                <p className={`text-xs ${active ? 'text-blue-500' : 'text-gray-500'}`}>{text}</p>
            </div>
        </>
    )
}

// NavBar component with 5 buttons: Expenses, Tabs, Request Expense, Friends, Me
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  return (
    <div className=" min-h-18 bg-[#FFFFFF] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] flex flex-row justify-around items-center rounded-t-lg text-xs">
      <NavButton
        text="expenses"
        icon={EditIcon}
        active={path === "/"}
        onClick={() => navigate("/")}
      />
      <NavButton
        text="tabs"
        icon={EditIcon}
        active={path === "/tabs"}
        onClick={() => navigate("/tabs")}
      />
      <NavButton
        text="request-expense"
        icon={EditIcon}
        active={path === "/request-expense"}
        onClick={() => navigate("/request-expense")}
      />
      <NavButton
        text="friends"
        icon={EditIcon}
        active={path === "/friends"}
        onClick={() => navigate("/friends")}
      />
      <NavButton
        text="me"
        icon={EditIcon}
        active={path === "/me"}
        onClick={() => navigate("/me")}
      />
    </div>
  );
};

export default NavBar

