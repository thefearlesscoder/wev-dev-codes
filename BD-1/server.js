//server instantiate

const express = require('express');
const app = express();

const bodyParser = require('body-parser');//use to parse request.Body in express -> PUT or POST
app.use(bodyParser.json()); //specifically json data parse krna hai.. and add it to request.Body object

//activating server at port: 3000
app.listen(3000, () => {
    console.log("server started at port : 3000");
})

//creating route for home page

app.get('/', (request, response) => {
    response.send("hello jee, its VKD");
})
 
//submitting some data on the server this data is REQUEST
app.post('/api/cars', (request, response) =>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted succesfully");
})

// below whole thing is promise
const mongooose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewurlParser: true,
    useUnifiedTopology: true
})

.then(() => {console.log("connection successful")})
.catch( (error) => {console.log("connection failed")});

