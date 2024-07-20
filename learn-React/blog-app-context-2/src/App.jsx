import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home"
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import TagPage from "./pages/TagPage";


function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () =>{
    const page = searchParams.get("page") ?? 1; //default page is 1

    if(location.pathname.includes("tags")){
        //iska matlab tag wala page show krma hai
        const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page), tag);
    }

    else if(location.pathname.includes("categories")){
        const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page), null, category);
    }

    else{
      fetchBlogPosts(Number(page));
    }

  } ,[location.pathname, location.search] );


  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/> 
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/category/:category" element={<CategoryPage/>}/>
      {/* /:blogId -- dynamic parameter jo blog/ ke aage kikha raghega use blog id maan liya jayega */}
    </Routes>
    
  );
}

export default App;
