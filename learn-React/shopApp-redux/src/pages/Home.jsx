import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products"
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);
        }
        catch{
            console.log("error aa gya ");
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect( ()=>{
        fetchProductData();
    },[])
    console.log(posts.length);
    console.log(loading);
    console.log(posts);


    return(
        <div className="">
            {
              loading ? <Spinner /> :
              posts.length > 0 ?
              (<div  className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                    posts.map( (post) => (
                        <Product key={post.id} post={post}/>
                    ))
                }
              </div>)  :
              <div className="flex items-center justify-center text-bold"> 
                <p>No data found</p>
              </div>
             
            }
        </div>
    )
}

export default Home;