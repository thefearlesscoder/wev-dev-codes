import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () =>{

        const {cart} = useSelector( (state) => state);

    return(
        <div className="w-11/12 ">
        <div className="flex  justify-between items-center h-20 max-w-6xl mx-auto"> {/* note the W and H provided*/}
            <NavLink to="/">
                <div className="ml-5">
                <img src="../logo.png" alt="" className="h-14"/>
                </div>
            </NavLink>
            <div className="flex gap-3 items-center font-medium text-slate-400 ">
                <NavLink to="/">
                    <p className="text-2xl font-bold">Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <div className="relative">
                         <FaShoppingCart className="text-2xl" />
                         {
                            cart.length > 0 &&
                            <span className="absolute text-xs -top-1 -right-2 bg-green-600 rounded-full w-4 h-4 text-white
                                flex justify-center items-center animate-bounce">{cart.length }</span>
                         }
                    </div>
                </NavLink>

            </div>
        </div>
    </div>
    )
}

export default Navbar;