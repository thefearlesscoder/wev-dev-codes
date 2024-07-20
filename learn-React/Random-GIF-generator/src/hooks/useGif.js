import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) =>{

    const[gif, setGif] = useState("");
    const[loading, setLoading] = useState(false);

    // const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    // const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    async function fetchData(tag){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        
        console.log(imageSource);

    }

    useEffect ( () =>{
        fetchData();
    },[])

    return{gif, loading, fetchData};
}

export default useGif;