import React, { useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/slices/CartSlice"
import toast from "react-hot-toast";


const Product = ({post}) =>{

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("item removed from cart");
    }

    return(
        <div className="flex flex-col items-center justify-between hover:scale-110 tansition duration-300 ease-in
            shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] tansition duration-300
            p-4 mt-10 ml-5 rounded-xl ">
            <div className="font-semibold text-gray-700 text-base truncate w-40 mt-1 text-left">
                <p>{post.title.slice(0,17) + "..."}</p>
            </div>

            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full" alt="" />
            </div>

            <div className="flex justify-between gap-12 items-center">
                <div >
                    <p className="text-green-500 text-sm font-semibold leading-3 mt-2 ">${post.price}</p>
                </div>

                <div className="">
                    {
                        cart.some((p) => p.id == post.id) ? 
                        (
                            <button 
                                className="text-gray-700 border border-gray-700 rounded-full font-semibold
                                    text-[12px] p-1 px-3 uppercase mt-1
                                    hover:bg-gray-700
                                    hover:text-white transition duration-300 ease-in"
                            onClick={removeFromCart}>
                                Remove Item
                            </button>
                        ) :
                        (
                            <button 
                                className="text-gray-700 border border-gray-700 rounded-full font-semibold
                                    text-[12px] p-1 px-3 uppercase mt-1
                                     hover:bg-gray-700
                                    hover:text-white transition duration-300 ease-in"
                            onClick={addToCart}>
                                Add to Cart
                            </button>
                        )   
                    }
                </div>
            </div>
    </div>
    )
}

export default Product;