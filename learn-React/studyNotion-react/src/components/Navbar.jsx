import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import {toast} from 'react-hot-toast';



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4">
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-3 text-white gap-x-6">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login Sigh Up Log Out Dashboard */}
            <div className="flex gap-x-4 items-center">
                {   !isLoggedIn && (
                    <Link to="/login">
                        <button className="bg-[#2b2a2a] text-white py-[8px] px-[12px] 
                            border rounded-[8px] border-[#3b3b3b]">
                            Login
                        </button>
                    </Link>
                )}

                { !isLoggedIn && (
                    <Link to="/signup">
                        <button className="bg-[#2b2a2a] text-white py-[8px] px-[12px] 
                            border rounded-[8px] border-[#3b3b3b]">
                            Sign Up
                        </button>
                    </Link>
                )
                }

                {   isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}
                         className="bg-[#2b2a2a] text-white py-[8px] px-[12px] 
                        border rounded-[8px] border-[#3b3b3b]">
                            Log Out
                        </button>
                    </Link>
                }

                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-[#2b2a2a] text-white py-[8px] px-[12px] 
                            border rounded-[8px] border-[#3b3b3b]">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;