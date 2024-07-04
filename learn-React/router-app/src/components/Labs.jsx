import React from "react";
import { useNavigate } from "react-router-dom";

function Labs(){
    const navigate = useNavigate();
    function clickHandler(){
        //move to about page
        navigate("/about");
    }
    return(
        <div>
            this id labs page
            <div>
            <button onClick={clickHandler}>move to about page</button>

            </div>

        </div>
    )
}

export  default Labs;