const express = require("express");
const router = express.Router();

const{login, signup} = require("../controllers/Auth");
const{auth, isStudent, isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup", signup);

//testing route
router.get("/test", auth, (req, res) => {
    res.json({
        succes:true,
        message:'welcom to protected route for tests',
    })
})

//protected routes --
//bastana padega is path mein kon kon se middleware use hoga
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        succes:true,
        message:'welocome student',
    })
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        succes:true,
        message:'welocome to admin page',
    })
})
module.exports = router;