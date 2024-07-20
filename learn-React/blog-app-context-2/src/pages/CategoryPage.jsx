import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import useLocation from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () =>{

        const navigation = useNavigate(); {/*diff btw navigate and navigation find out ----*/}
        const location = useLocation();
        const category = location.pathname.split("/").at(-1);

    <div>
        <Header />
        <div>
            <button
                onClick={()=>navigation(-1)}>
                back
            </button>

            <h2>
                Blogs On <span>#{category}</span>
            </h2>
        </div>
        <Blogs />
        <Pagination />
    </div>
}

export default CategoryPage;