import React from "react";
import frameImage from "../assets/frame.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn})=>{
    return (
        <div className="flex flex-row justify-between w-11/12 h-[100vh] max-w-[1160px] py-12 mx-auto gap-x-11 gap-y-0">
            <div className="w-[11/12] mx-w-[450px]">

                <h1 className="text-white font-semibold 
                    text-[1.875rem] leading-[2.35rem]">
                    {title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem]">
                    <span className=" text-[#4a4c7d]">
                        {desc1}</span>
                        <br />
                    <span className="text-[#2f5e36]">
                        {desc2}</span>
                </p>

                {formType === "signup"?
                (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-[50%] bg-[#4e4f4e]"></div>
                    <p className="text-[#4e4f4e] font-medium leading-[1.75rem]">OR</p>
                    <div className="h-[1px] w-[50%] bg-[#4e4f4e]"></div>
                </div>

                <button className="flex w-full justify-center rounded-[8px] font-medium border 
                    border-[#3b3b3b] px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/> <p className="text-[#424d42]">Sign in with Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px] ">
                <img src={frameImage} alt=""
                 width={558}
                 height={504}
                 loading="lazy"/>

                <img src={image} alt=""
                 width={558}
                 height={504}
                 loading="lazy"
                    className="absolute -top-4 right-4"/>
            </div>

        </div>
    )
}

export default Template;