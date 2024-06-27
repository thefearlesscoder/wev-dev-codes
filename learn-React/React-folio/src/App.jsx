import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const[text,setText] = useState('');
  const[name,setName] = useState("vkd");

  //variation 1-> on every render
  // useEffect( ()=>{
  //     console.log("UI rendering done");
  // });

  //variation 2 -> on first render only
  // useEffect( ()=>{
  //   console.log("UI rendering done");
  // },[]);  //[] --> dependecy list

  //third variation ->on first render + whenevr depences change

  // useEffect( ()=>{
  //     console.log("change observed");
  // },[name]);

  //variation -> 4 to handle unmounting of a component

  useEffect( ()=>{
      //add event listerner
      console.log("listerner added");

      return()=>{
        console.log("listerner removed")
      }
  },[text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  
  return (
    <div className="App">
        <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
