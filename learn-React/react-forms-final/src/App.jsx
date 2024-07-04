import { comment } from "postcss";
import "./App.css";
import { useState } from "react";

function App() {

  const[formData, setFormData] = useState({
	firstName:"", lastName:"", email:"", country:"India", street:"", city:"", state:"", zip:"",
	comments:false, candidate:false, offers:false,
	pushNotification:""
  }) // agr ye obejct attributes nahi mention karenge to bhi object mein ban ke aa jayega .. aur hum oblecj o
  // obtian kr payenge ... becoz in JS if any attribute not present in object JS automatically add that

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked : value} ));
  }

  function submitHandler(event){
		event.preventDefault();
		console.log("finally printing the form data");
		console.log(formData);
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>
        <label htmlFor="first-name">First Name</label>
          <br />
        <input type="text"
          placeholder="John"
          id="first-name"
          name = "firstName"
          value = {formData.firstName}
          onChange={changeHandler}
          className="outline"
          />

        <br />
        <br />

        <label htmlFor="last-name">Last Name</label>
          <br />
        <input type="text"
          placeholder="Cena"
          id="last-name"
          name = "lastName"
          value = {formData.lastName}
          onChange={changeHandler}
          className="outline"
          />

        <br />
        <br />

        <label htmlFor="email">Email</label>
          <br />
        <input type="email"
          placeholder="vk@example.com"
          id="email"
          name = "email"
          value = {formData.email}
          onChange={changeHandler}
          className="outline"
          />
        <br />
        <br />

        <label htmlFor="country">Country</label>
          <br />
        <select name="" id="country" className="outline">
            <option value="india">India</option>
            <option value="singapore">Singapore</option>
            <option value="usa">USA</option>
            <option value="russia">Russia</option>
        </select>

        <br /><br />

        <label htmlFor="street">Street Address</label>
          <br />
        <input type="text"
          placeholder="1234/2 main st"
          id="street"
          name = "street"
          value = {formData.street}
          onChange={changeHandler}
          className="outline"
          />

          <br /><br />

          <label htmlFor="city">City</label>
          <br />
        <input type="text"
          placeholder="Lucknow"
          id="city"
          name = "city"
          value = {formData.city}
          onChange={changeHandler}
          className="outline"
          />

          <br /><br />

          <label htmlFor="state">State / Province</label>
          <br />
        <input type="text"
          placeholder="UP"
          id="state"
          name = "state"
          value = {formData.state}
          onChange={changeHandler}
          className="outline"
          />

          <br /><br />
        
          <label htmlFor="zip">ZIP code</label>
          <br />
        <input type="text"
          placeholder="2026022"
          id="zip"
          name = "zip"
          value = {formData.zip}
          onChange={changeHandler}
          className="outline"
          />

        <br /><br />

        <fieldset>
          <legend>By Email</legend>
          <br />

          <div className="flex">
          <input type="checkbox" 
            id="comments"
            name ="comments"
            onChange={changeHandler}
            checked={formData.comment}/>

            <div>
            <label htmlFor="comments">  Comments</label>
            <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>
            

          <br />

          <div className="flex">
          <input type="checkbox" 
            id="candidate"
            name ="candidate"
            onChange={changeHandler}
            checked={formData.candidate}/>

            <div>
            <label htmlFor="candidate">  Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>

            <br />

          <div className="flex">
              <input type="checkbox" 
              id="offers"
              name ="offers"
              onChange={changeHandler}
              checked={formData.offers}/>

              <div>
              <label htmlFor="offers">  Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer</p>
              </div>
          </div>  
        </fieldset>
        <br /><br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile</p>


          <input type="radio" 
            name="pushNotification"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}/>
          
          <label htmlFor="pushEverything"> Everything</label>
          <br />

          <input type="radio" 
            name="pushNotification"
            id="pushEmail"
            value="Same as Email"
            onChange={changeHandler}/>
          
          <label htmlFor="pushEmail"> Same as Email</label>
          <br />

          <input type="radio" 
            name="pushNotification"
            id="pushNothing"
            value="No push notifications"
            onChange={changeHandler}/>
          
          <label htmlFor="pushNothing"> No push notifications</label>
          <br />
        </fieldset>

		  <button className="bg-blue-700 text-white rounded-md py-2 px-4">
			Save
		  </button>


      </form>
    </div>
  );
}

export default App;
