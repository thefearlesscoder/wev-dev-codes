import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const[gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);
    const[tag, setTag] = useState("");

    
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    // function changeHandler(event){
    //     setTag(event.target.value);
    // }
    return(

        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center
            gap-y-5 mt-[15px] ">
            <h1 className="mt-[15px] text-3xl underline uppercase font-bold "> Search Gif {tag}</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450px"/>)
            }

            <input
             className="w-10/12 rounded-lg mb-[3px] text-center"
             onChange={(event)=> setTag(event.target.value)}
             value={tag} />

            <button onClick={clickHandler}
                className="bg-white opacity-70 w-10/12 rounded-md text-lg mb-[20px] text-black py-2 uppercase font-extrabold">
                Generate
            </button>
        </div>

    )
}

export default Tag;