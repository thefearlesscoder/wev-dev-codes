import React from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-hot-toast';

const LoginForm =({setIsLoggedIn}) =>{

    const[formData, setFormData] = useState({
        email:"", password:""
    })
    const[showPass, setShowPass] =  useState(false);

    const navigate  = useNavigate();

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        })
    )}

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label className="w-full">
                <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem] ">
                    Email Addresss <sup className="text-pink-800">*</sup>
                </p>
            
                <input type="email"
                required
                name="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email ID"
                className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-full p-[12px]
                border-b-2  border-inherit "/>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]" >
                    Password <sup className="text-pink-800">*</sup>
                </p>
            
                <input type={showPass ?("text"):("password")}
                required
                name="password"
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter the password"
                className="bg-[#424241] rounded-[0.5rem] text-white  w-full p-[12px]
                border-b-2  border-inherit"/>

                <span 
                    className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={()=>setShowPass((prev)=>!prev)}>
                    {showPass ?(<FiEye fontSize={24} fill="#afb2bf" />):(<FiEyeOff fontSize={24} fill="#afb2bf"/>)}
                </span>
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-500 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className="bg-yellow-300 rounded-[8px] font-medium text-[#131111] mt-3 px-[12px] py-[8px]">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm;