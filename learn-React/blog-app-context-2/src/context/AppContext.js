import React, { createContext } from "react";
import { useContext, useState } from "react";
import {baseUrl} from "../baseUrl";

export const AppContext = createContext(); /*step 1*/

// step :2 provider
export default function AppContextProvider({children}){
    const[loading, setloading] = useState(false);
    const[posts, setPosts] = useState([]);
    const[page, setPage] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    //data filling 

    async function fetchBlogPosts(page = 1, tag=null, category){

        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            // alert("data fetch failed");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setloading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }



    const value = {
        posts, setloading,
        posts, setPosts,
        page, setPage,
        totalPages, setTotalPages,  //context 
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

