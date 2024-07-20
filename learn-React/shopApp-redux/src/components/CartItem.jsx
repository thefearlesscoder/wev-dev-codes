import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/slices/CartSlice"
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) =>{

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("item removed");
    }

    return(
        <div>
            <div className="fe">
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <div>
                        <p>{item.price}</p>
                        <div 
                            onClick={removeFromCart}>
                        <MdDelete />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;