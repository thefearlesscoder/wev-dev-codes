import React from "react";
import "./Spinner.css"

const Spinner = () =>{
    return(
        <div className="flex flex-col items-center space-y-2 pt-20">
            <div className="spinner"></div>
            <p className="text-white font-bold">loading...</p>
        </div>
    )
}

export default Spinner;