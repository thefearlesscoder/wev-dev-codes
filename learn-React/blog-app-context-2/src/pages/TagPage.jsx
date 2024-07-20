import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"

const TagPage = () =>{

        const navigation = useNavigation(); {/*diff btw navigate and navigation find out ----*/}
        const location = useLocation();
        const tag = location.pathname.split("/").at(-1);
    <div>
        <Header />
        <div>
            <button
                onClick={()=>navigation(-1)}>
                back
            </button>

            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs />
        <Pagination />
    </div>
}

export default TagPage;