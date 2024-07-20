import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";

const BlogPage = () =>{

    const [blog, setBLog] = useState(null);
    const [relatedBlogs, setRealatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRealatedBlogs(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            setBLog(data.blog);
            setRealatedBlogs(data.relatedBlogs);
        }
        catch{
            
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId)
            fetchRealatedBlogs();
    },[location.pathname])
        

    return(
        <div>
            <Header />
            <div>
                <button
                    onClick={()=>navigation(-1)}>
                    Back
                </button>
            </div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : blog ? (
                <div>
                    <BlogDetails post={blog} />
                        <h2>Releated Blogs</h2>
                        {relatedblog.map((post) => (
                    <div key={post.id}>
                        <BlogDetails post={post} />
                    </div>
                 ))}
                </div>
             ) : (
                 <p>No Blog Found</p>
                )
            }
        </div>
    )
}

export default BlogPage;