import React from "react";
import { useCookies } from "react-cookie";
import { logout } from "../api/auth";

export const Home = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggedInStatus'])
    
    const handleLogout = async (e) => {
        await logout()
        removeCookie("loggedInStatus")
        // setCookie('loggedInStatus', 'logged_out')
        console.log('xxxx', cookies.loggedInStatus)
    }
    return (
        <div className="p-2">
            Home
            <button
                className="button bg-red-300 p-1 rounded m-1"
                onClick={handleLogout}
            >
                LOGOUT
            </button>
        </div>
    )
}