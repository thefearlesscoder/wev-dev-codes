import { useState } from "react";
import "./App.css";

function App() {

  // const[firstName, setFirstName] = useState("");
  // const[LasttName, setLastName] = useState("");

  // function changeFirstName(event){
    
  //   setFirstName(event.target.value);
  // }

  // function changeLastName(event){
  //   setLastName(event.target.value);

  // }

  const[formData, setFormData] = useState( {firstName: "", lastName: "", email:"", 
                                          comments:"", isVisible:true, mode:"", favCar:""})  
  console.log(formData);
  function changeHandler(event){
    const {name, value, checked, type} = event.target  // destructuring
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value  //syntax aise hi hot hai forms mein
        [name] : type === "checkbox" ? checked : value
      }
    }
    );
  }
  function submitHandler(event){
    event.preventDefault();
    //
    console.log("finally printing the form data...//././")
  }

  return (
      <div className='App'>

          <form onSubmit={submitHandler}>

            <input type="text"
              placeholder="First Name" 
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              />

            <br />

            <input type="text" 
              placeholder="Last Name"
              onChange={changeHandler}
              name="lastName"
              value={formData.lastName}
              />

              <br />

            <input type="email" 
              placeholder="Email enter karo"
              onChange={changeHandler}
              name="email"
              value={formData.email}/> 

              <br />

            <textarea 
              name = "comments"
              placeholder="Enter your comments"
              onChange={changeHandler}
              value={formData.comments}/>

            <br />

            <input type="checkbox"
             onChange={changeHandler}
             name="isVisible"
             id="isVisible"
             checked={formData.isVisible}/> 
             <label htmlFor="isVisible">Am i visible?</label>

            <br />

            <fieldset>
              <legend>the funnel</legend>
              <input type="radio"
             onChange={changeHandler}
             name = "mode"
             id = "online-mode"
             value = "online-mode"
             checked={formData.mode === "online-mode"} // ********M!* MI **************
             />
            <label htmlFor="online-mode">Online</label>

            <input type="radio"
             onChange={changeHandler}
             name = "mode"
             id = "offline-mode"
             value = "offline-mode"
             checked={formData.mode === "offline-mode"}
             />
            <label htmlFor="offline-mode">Off Line</label>
              

            </fieldset>

            <select name="favCar" id=""
              onChange={changeHandler}
              value={formData.favCar}>

                <option value="scorpio">Scorpio</option>
                <option value="fortuner">Fortuner</option>
                <option value="Tata">Tata</option>
                <option value="thar">Thar</option>
              
            </select>
            
            <br />
            
            {/* <input type="submit" value="submit"/> */}
            <button>Submit</button>
         </form>

      </div>
  );
}

export default App;
