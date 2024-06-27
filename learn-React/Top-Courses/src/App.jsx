// import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import {apiUrl, filterData} from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () =>{

  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  async function fetchData(){

    setLoading(true);

    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        //output -> conatils all the json response
        setCourses(output.data);
    }
    catch(error){
      toast.error("network error");
    }

    setLoading(false);
  }
  //use effect on first render only..
  useEffect( () =>{
    fetchData();
  }, []); 

  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
          <div className="">
            <Navbar/>
          </div>

          <div className="bg-gray-600">
            <div>
              <Filter filterData={filterData} category={category} setCategory={setCategory}/>
            </div>

            <div>
              {
                loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
              }
            </div>
          </div>

    </div>
  );
}

export default App;
