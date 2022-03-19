const express = require("express");
const router = express.Router();
const User = require("../models/PSbuyer");
const bcrypt = require("bcrypt");
const fetchuser=require("../middleware/fetchuser")


var jwt = require("jsonwebtoken");

const JWT_SECRET = "NOIL";




const { body, validationResult } = require("express-validator");
const { findById } = require("../models/PSbuyer");
router.post("/",async(req,res)=>{
  res.send("You are in api/psbuyer")
})
router.post(
  "/createUser",
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({success:success, errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email }); 

      if (user) {
        console.log("EMail already exists .......................");
      }

      const salt = await bcrypt.genSaltSync(8);
      const secpassword = await bcrypt.hashSync(req.body.password, salt);

      user = await User.create({
        company: req.body.company,
        password: secpassword,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      var authtoken = jwt.sign(data, JWT_SECRET);
      success=true
      res.json({success:success, authtoken,company:user.company });

      //   res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({success:success,error});
      // return res.status(400).json({"errr":"Some error occured"});
    }
  }
);

router.post(
  "/loginuser",
  async (req, res) => {
    
   
   
    let success =false;
    const errors = validationResult(req);
    

    if (!errors.isEmpty()) {
      return res.status(400).json({ success:success,errors: errors.array() });
    }
    

    let { email, password } = req.body;

  
    try{
    let user = await User.findOne({ email });
    
  
    if (!user) {
      return res
        .status(400)
        .json({ success:success,error: "Enter the valid credentials .   " });
    }

    let pass_match = await bcrypt.compareSync(password, user.password);
    
    if (!pass_match) {
      return res
        .status(400)
        .json({success:success, error: "Enter the valid credentials .   " });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
   
    var authtoken = jwt.sign(data, JWT_SECRET);
  
    success=true
    res.json({success:success, authtoken ,company:user.company});
    

    }catch(e){
      console.log(e);
    }
  }
);


router.get(
    "/userdata",fetchuser,
    async (req, res) => {

        try{
       const user= await User.findById(req.user.id).select("-password");
       res.json({user})
        }catch(error){
            console.log(error.message);
            res.status(500).send("Internal Server Error")
        }





    }
)



module.exports = router;
