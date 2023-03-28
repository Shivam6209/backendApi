const mongoose = require("mongoose")

const notesschema = mongoose.Schema({
    img:String,
    title: String,
    price: String,
    desc: String,
   
}, {
    versionKey: false
})
const notesmodel = mongoose.model("notes", notesschema)
module.exports = notesmodel