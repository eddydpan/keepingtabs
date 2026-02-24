// import React from "react"
import { useState } from 'react';
import {Link} from 'react-router-dom';
import EditIcon from '../assets/edit-icon.svg';


// Text & Icon button component for the NavBar
const NavButton = ({ text, icon, active, onClick }: { text: string, icon: string, active: boolean, onClick: () => void }) => {
    return (
        <>
            <Link to={`/${text}`} onClick={onClick} className='flex flex-col items-center justify-center'>
                <img className={`"w-4" ${active ? 'text-blue-500' : 'text-gray-500'}`} src={icon} />
                <p className={`text-xs ${active ? 'text-blue-500' : 'text-gray-500'}`}>{text}</p>
            </Link>
        </>
    )
}

// NabBar component with 5 NavButtons
const NavBar = () => {
    const [active, setActive] = useState("expenses");

    return (
        <>
            <div className="min-w-screen min-h-18 bg-[#FFFFFF] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] flex flex-row justify-around items-center rounded-t-lg text-xs">
                <NavButton text="expenses" icon={EditIcon} active={active === "expenses"} onClick={() => setActive("expenses")} />
                <NavButton text="tabs" icon={EditIcon} active={active === "tabs"} onClick={() => setActive("tabs")} />
                <NavButton text="request-expense" icon={EditIcon} active={active === "request-expense"} onClick={() => setActive("request-expense")} />
                <NavButton text="friends" icon={EditIcon} active={active === "friends"} onClick={() => setActive("friends")} />
                <NavButton text="me" icon={EditIcon} active={active === "me"} onClick={() => setActive("me")} />
            </div>
        </>
    )
}

export default NavBar