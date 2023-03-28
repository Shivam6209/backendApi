const express = require("express")
const jwt = require("jsonwebtoken")
const notes_post = express.Router()
const notesmodel = require("../model/datamodel")
const get_route = express.Router()


notes_post.post("/", async (req, res) => {
    const notes = req.body;
    await notesmodel.insertMany(notes);
    res.json({ "msg": ` data added` });
});



get_route.get("/", async (req, res) => {
    const { page, title } = req.query;
    const limit = 20;
    const skip = (+page - 1) * limit;

    try {
        let query = {};
        if (title) {
            query = { title };
        }

        const notes = await notesmodel.find(query).skip(skip).limit(limit);
        res.status(200).json(notes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

notes_post.get("/:id", async (req, res) => {
   
    try {
        if(req.params){
            const { id } = req.params
            const data = await notesmodel.findById(id)
            res.status(200).json(data)
        }
        else{
            res.status(404).json({"msg":"please provide the id"})
        }
    } catch (error) {
        res.status(404).json({ "msg": "login first" })
        console.log(error);
    }
})




get_route.delete("/:id", async (req, res) => {
    
    try {
       
        if (req.params) {
            const { id } = req.params
            const data = await notesmodel.findByIdAndDelete(id)
            res.status(200).json({ "msg": "data deleted" })
        } else {
            res.status(404).json({ "msg": "please provide the id" })
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({ "msg": "doing something wrong please try again" })
    }
})





module.exports = {
    notes_post, get_route

}