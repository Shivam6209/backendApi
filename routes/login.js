const express = require("express")
const reg_routes = express.Router()
const bcrypt = require("bcrypt")


const reg_model = require("../model/reg")
const login_rout = express.Router()
const jwt = require("jsonwebtoken")

reg_routes.post("/", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const userr=await reg_model.findOne({email})
    if(userr){
      return res.status(400).json({error:"user already exist"})
    }
    bcrypt.hash(password, 8, async (err, hash) => {
      const datatodb = new reg_model({ name, email, password: hash })
      await datatodb.save()
      res.json("data saved")
      console.log(err);
    })

  } catch (error) {
    console.log(error)
    res.json("failed")
  }
})
  ;
login_rout.post("/", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await reg_model.findOne({ email })
    console.log(user);
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        console.log(err);
        console.log(password);

        if (result) {
          res.status(200).json({ "msg": "Login successfull!", "token": jwt.sign({ "userID": user._id }, "masai"),"name":user.name})
        } else {
          res.status(400).json({ "msg": "Wrong Credentials" })
        }
      });
    }
  } catch (err) {
    res.status(400).json({ "msg": err.message })
  }
})



module.exports = {
  reg_routes,
  login_rout,
}
