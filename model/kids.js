const mongoose = require("mongoose")

const notesschema = mongoose.Schema({
    img:Array,
    title: String,
    Brand:String,
    price:Number,
    category:String,
    colour:String,
   dsc:String
}, {
    versionKey: false
})
const kidsmodel = mongoose.model("notes", notesschema)
module.exports = kidsmodel