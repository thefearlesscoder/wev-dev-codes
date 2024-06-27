import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";


const Card = (props) =>{

    let review = props.review;

    return(
        <div className="flex flex-col md:relative min-h-[12rem] ">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img
                className="'aspect-square rounded-full w-[140px] h-[140px] z-25"
                 src={review.image} alt="" />

                <div className="rounded-full w-[140px] h-[140px] bg-violet-500 absolute
                    top-[-6px] z-[-5] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="text-bold text-2xl capitalize tracking-wide">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            {/* <div className="text-center mt-1">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div> */}

            <div className="text-violet-400 mx-auto mt-5">
                <ImQuotesLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <ImQuotesRight/>
            </div>

            
        </div>
    )
}

export default Card;