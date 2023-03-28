const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const connection=async ()=>{
await mongoose.connect(process.env.dburl)

}
module.exports={
    connection
}