const mongoose = require("mongoose")

const notesschema = mongoose.Schema({
    img:Array,
    title: String,
    Brand:String,
    price: String,
    category:String,
    colour:String,
}, {
    versionKey: false
})
const mensmodel = mongoose.model("mens", notesschema)
module.exports = mensmodel