import "./App.css";
import { useState } from "react";

function App() {
  
  const [count,setCount] = useState(0);

  function decrHandler(){
    setCount(count-1);
  }

  function incHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    
    <div className="width-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151]  gap-10 overflow-x-hidden overflow-y-auto ">
          <h2 className="text-[#0398d4] font-medium tex-2xl">Increment - Decrement</h2>

          <div className="bg-white flex gap-x-5 px-2 text-2xl rounded-sm justify-center items-center">
                <button onClick={decrHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
                    -
                </button>
                <div className="text-2xl text-bold">
                    {count}
                </div>
                <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
                    +
                </button>


          </div>

          <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-sm text-lg">
            Reset
          </button>




    </div>


  );
}

export default App;
