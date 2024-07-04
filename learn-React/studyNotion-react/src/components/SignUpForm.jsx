import React from "react";
import { useState } from "react";
import {toast} from 'react-hot-toast';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router";


const SignUpForm = ({setIsLoggedIn}) => {
    const[formData, setFormData] = useState({
        firstname:"", lastname:"", email:"", password:"", confirmPassword:""
    })
    const[showPass, setShowPass] =  useState(false);

    const[accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        })
    )}

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords don't match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("account created");
        const accountData = {
            ...formData
        };
        console.log(accountData);

        navigate("/dashboard");
    }

    return(
        <div>
            {/* student intrvutot tab */}
            <div className="flex bg-[rgb(66,66,65)] gap-x-1 my-6 rounded-full max-w-max">
                <button
                className={`${accountType === "student" ?
                    "bg-slate-600 text-white"
                    : "bg-transparent text-gray-400"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}>
                    Student
                </button>
                <button
                    className={`${accountType === "student" ?
                        "bg-slate-600 text-white"
                        : "bg-transparent text-gray-400"
                    } py-2 px-5 rounded-full transition-all duration-200`} 
                    onClick={()=> setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className="">
                {/* first name and last name  */}
                <div className="flex w-full gap-x-5">
                    <label className="w-[50%]">
                        <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]">
                            First Name <sup className="text-pink-800">*</sup></p>

                        <input type="text"
                        required
                        name="firstname"
                        onChange={changeHandler}
                        placeholder="Enter the First Name"
                        value={formData.firstname}
                        className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-[100%] p-[12px]
                border-b-2  border-inherit "/>
                    </label>

                    <label className="w-[50%]">
                        <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]">
                            Last Name <sup className="text-pink-800">*</sup></p>

                        <input type="text"
                        required
                        name="lastname"
                        onChange={changeHandler}
                        placeholder="Enter the Last Name"
                        value={formData.lastname}
                        className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-[100%] p-[12px]
                border-b-2  border-inherit "/>
                    </label>
                </div>

                {/* email address  */}
                <label>
                        <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]">
                            Email <sup className="text-pink-800">*</sup></p>

                        <input type="email"
                        required
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter the Email Address"
                        value={formData.email}
                        className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-full p-[12px]
                border-b-2  border-inherit "/>
                </label>

                {/* password and confirm */}
                <div className="flex gap-x-4">
                    <label className="relative w-[50%]">
                            <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]">
                                Create Password <sup className="text-pink-800">*</sup></p>

                            <input type={showPass ?("text"):("password")}
                                required
                                name="password"
                                value = {formData.password}
                                onChange={changeHandler}
                                placeholder="Enter a password"
                                className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-full p-[12px]
                border-b-2  border-inherit "/>

                            <span
                                className="absolute right-3 top-[38px] cursor-pointer" 
                                onClick={()=>setShowPass((prev)=>!prev)}>
                                {showPass ?(<FiEye fontSize={24} fill="#afb2bf" />):(<FiEyeOff fontSize={24} fill="#afb2bf"/>)}
                            </span>    
                    </label>

                    <label className="relative w-[50%]">
                            <p className="text-[0.875rem] text-[#70706f] leading-[1.375rem]">
                                Confirm Password <sup className="text-pink-800">*</sup></p>

                            <input type={showPass ?("text"):("password")}
                                required
                                name="confirmPassword"
                                value = {formData.confirmPassword}
                                onChange={changeHandler}
                                placeholder="Retype the password"
                                className="bg-[rgb(66,66,65)] rounded-[0.5rem] text-white  w-full p-[12px]
                border-b-2  border-inherit "/>

                            <span 
                                className="absolute right-3 top-[38px] cursor-pointer"
                                onClick={()=>setShowPass((prev)=>!prev)}>
                                {showPass ?(<FiEye fontSize={24} fill="#afb2bf"/>):(<FiEyeOff fontSize={24} fill="#afb2bf"/>)}
                            </span>    
                    </label>
                </div>

                <button className="bg-yellow-300 rounded-[8px] font-medium text-[#131111] mt-5 w-full px-[12px] py-[8px]">
                    Create account
                </button>

            </form>



        </div>
    )
}

export default SignUpForm;