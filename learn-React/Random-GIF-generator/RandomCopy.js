import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const[gif, setGif] = useState("car");
    const[loading, setLoading] = useState(false);

    
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        
        console.log(imageSource);

    }

    useEffect ( () =>{
        fetchData();
    },[])

    function clickHandler(){
        fetchData();
    }
    return(

        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center
            gap-y-5 mt-[15px] ">
            <h1 className="mt-[15px] text-3xl underline uppercase font-bold ">a Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450px"/>)
            }

            <button onClick={clickHandler}
                className="bg-white opacity-70 w-10/12 rounded-md text-lg mb-[20px] text-black py-2 uppercase font-extrabold">
                Generate
            </button>
        </div>

    ) 
}

export default Random;