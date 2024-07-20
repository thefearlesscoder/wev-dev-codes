import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () =>{

    const {cart} = useSelector( (state) =>state);
    const [totalAmount, setTotalAmount] = useState(0);
    
    useEffect(() =>{
        setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0) ); //reduce accumlator function - mdn
    },[]);

    return(
        <div>
            {
                cart.length > 0 ?
                (<div className="flex justify-center items-center">


                    <div>
                        {
                            cart.map( (item, index) => {
                                return <CartItem key={item.id} item={item} itemIndex = {index}/>
                            })
                        }
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Items: {cart.length}</span>
                            </p>
                        </div>

                        <div>
                            <p>Total Amount: ${totalAmount}</p>
                            <p>Checkout Now</p>
                        </div>
                    </div>


                </div>) :
                (
                    <div>
                        <h1>Your Cart is empty!!</h1>
                        <Link to={"/"}>
                            <button>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }


        </div>
    )
}

export default Cart;