import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }
  return (
    <div
      className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center
            gap-y-5 mt-[15px] "
    >
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold ">
        a Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450px" />}

      <button
        onClick={clickHandler}
        className="bg-white opacity-70 w-10/12 rounded-md text-lg mb-[20px] text-black py-2 uppercase font-extrabold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
