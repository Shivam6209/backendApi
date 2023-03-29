const express = require("express")
const { reg_routes, login_rout } = require("./routes/login")
const app = express()
const cors = require("cors");
app.use(express.json())
const { connection } = require("./conncetion")
const { notes_post,womens,men, get_route,menid,womenid } = require("./routes/data")
const auth = require("./miidelwar/postmiddleware")
app.use(cors())
app.use("/reg",reg_routes)
app.use("/login",login_rout)
app.use("/getkids",get_route)
app.use("/kidid",notes_post)
app.use("/getwomen",womens)
app.use("/getmen",men)
app.use("/menid",menid)
app.use("/womenid",womenid)
app.use(auth)
app.use("/addkid",notes_post)
app.use("/addwomen",womens)
app.use("/addmen",men)
app.use("/delbyid",get_route)
app.listen(3000, () => {
    try {
        connection()
    } catch (error) {
        console.log(error);
    }
});
//http://localhost:3000/getkids?page=1&title=value&color=value&Brand=value&minPrice=value&maxPrice=value&sbp=asc/desc
