import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";



const Blogs = () =>{
//consume data
    const {loading, posts} = useContext(AppContext);


    return(
        //using map function
        <div className="w-11/12 max-w-[630px] py-3 flex flex-col gap-y-7 mt-[60px] mb-[70px]">   
            {
                loading ? 
                (<Spinner />) : 
                (
                    posts.length === 0 ? 
                    ( <div>
                        <p>No post found</p>
                    </div>) : 
                    
                    (posts.map( (post) => (

                        <div key={post.id} className="flex flex-col">
                            <p className="font-bold text-sm">{post.title}</p>

                            <p className="text-xs">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span> 
                            </p>

                            <p className="text-[12px]">
                                Posted on <span>{post.date}</span>
                            </p>
                            <p className="text-sm mt-2">{post.content}</p>
                            <div className="flex gap-x-2">
                                {post.tags.map( (tag, index) => {
                                    return(
                                        <span key={index} className="text-xs font-bold underline text-blue-900">{`#${tag}`}</span>
                                    )
                                })}
                            </div>
                        </div>
                    ) ))
                )

            }
        </div>
    )
}

export default Blogs;