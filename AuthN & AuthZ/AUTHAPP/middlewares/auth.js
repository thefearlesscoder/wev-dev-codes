//auth, isStudent, isTeacher, isAdmin middleware
//auth ka role hai check krna ki tum authenthi user hai ya nahi

const jwt = require("jsonwentoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  // next se, agla middlewre call hota hai, ek khatam hone doosre ki call krni padti hai
  try {
    //extract jwt token-- requiest ki body mein or header or cookies mein pada hai
    //request ki body se token ko extract krna hai
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "token missing",
      });
    }

    //verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET); // decoded object mil jayega
      console.log(decode); // to print the decoded object

      req.user - decode;
    } catch (error) {
      req.status(401).json({
        success: false,
        message: "token id invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "some error in authentication, while verifying token",
    });
  }
};

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role ==='Student'){
            return res.status(401).json({
                success: false,
                message:'this is a protected route for students',
            })
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'user role id not matchig'
        })
    }
};

exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role ==='Admin'){
            return res.status(401).json({
                success: false,
                message:'this is a protected route for admin',
            })
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'user role id not matchig'
        })
    }
}
