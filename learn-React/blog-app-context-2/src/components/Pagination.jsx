import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination = () =>{
    const {page, handlePageChange, totalPages} = useContext(AppContext);

    return(
        <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full">
            <div className="flex gap-x-3 w-11/12 max-w-[630px] justify-between mx-auto">
                <div className="flex w-1/3 gap-x-2">
                { page > 1 && 
                   ( <button onClick={() => handlePageChange(page-1)}
                        className="border shadow-md rounded-md py-1 px-4">
                        Previous
                    </button>)   
                }
                {
                    page< totalPages &&
                    ( <button onClick={() => handlePageChange(page+1)}
                        className="border shadow-md rounded-md py-1 px-4">
                        Next
                     </button>)
                }
                </div>
                <p className="text-sm font-bold opacity-90 my-auto">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination;