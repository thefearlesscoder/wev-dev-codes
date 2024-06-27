import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            //pehle se liked hua pada tha
            setLikedCourses( (prev)=> prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed!!");
        }
        else{
            //pehle se liked nahi hai
            //insert krna hai
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non empty pehle se hai
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("liked Successfully");
        }
    }
    return(
        <div className="w-[300px] bg-[#262627] rounded-md overflow-hidden text-gray-300">

            <div className="relative ">
                <img src={course.image.url} alt="" />
            

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white ">
                    {
                        course.description.length > 100 ? (course.description.substr(0,100) + "...") : (course.description)
                    }
                </p>
            </div>
        </div>


    )
}

export default Card;