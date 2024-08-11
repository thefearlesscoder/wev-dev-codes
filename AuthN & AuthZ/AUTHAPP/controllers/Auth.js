const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();
//signup route handler
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //check if the user already exist
    const existingUser = await User.find({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "error in hashing password",
      });
    }
    //create entry for user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(400).json({
      success: true,
      message: "regis sussecessfull",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: " user can't be registered",
    });
  }
};

//login

exports.login = async (req, res) => {
  try {
    //data fetch
    const { email, password } = req.body;
    // validation on email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details carefully",
      });
    }

    //check user availabilty

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Not a registered user",
      });
    }

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    //verify password of the user & generate JWT token
    if (await bcrypt.compare(password, user.password)) {
      //password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      // user = user.toObject();
      user.token = token;
      user.password = undefined; // user ke object se password hataya hai
      const options = {
        expiresIn: new Date(Date.now() + 3*24*60*60*1000),
        httpOnly: true, //client side pe access nahi hoga
      }
      res.cookies("token", token, options).status(200).json({
        success:true,
        token,
        user,
        message:'user logged in succesfuly', 
        
      });
    }
    
    else {
      //passsword do not match
      return res.status(403).json({
        succes: false,
        message: "password dif not match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      message: 'login failure',
    });
  }
};
