import React, { useState } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const Testimonials = (props) =>{
    let reviews = props.reviews;
    const [index, setIndex] =  useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
       let randomIndex =  Math.floor((Math.random() * reviews.length));
       setIndex(randomIndex);
    }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white min-h-[12rem] rounded-md flex flex-col justify-center items-center
            m-10 p-10 transition-all duration-700 hover:shadow-xl">
            <Card review={reviews[index]}></Card>

            <div className="flex gap-4 justify-center text-violet-400 mt-5 text-3xl">
                <button 
                onClick={leftShiftHandler}
                className="cursor-pointer hover:text-violet-600 transition-all duration-200">
                    <FaAngleLeft />
                </button>
                <button 
                onClick={rightShiftHandler}
                className="cursor-pointer hover:text-violet-600 transition-all duration-200">
                    <FaAngleRight />
                </button>
            </div>

            <div className="mt-5">
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
                    cursor-pointer mt-4 px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>

        </div>
    );
}

export default Testimonials;