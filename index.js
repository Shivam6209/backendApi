const express = require("express")
const { reg_routes, login_rout } = require("./routes/login")
const app = express()
const cors = require("cors");
app.use(express.json())
const { connection } = require("./conncetion")
const { notes_post, get_route } = require("./routes/data")
const auth = require("./miidelwar/postmiddleware")
app.use(cors())
app.use("/reg",reg_routes)
app.use("/login",login_rout)
app.use("/getdata",get_route)
app.use("/databyid",notes_post)
app.use(auth)
app.use("/add",notes_post)
app.use("/delbyid",get_route)
app.listen(3000, () => {
    try {
        connection()
    } catch (error) {
        console.log(error);
    }
});
