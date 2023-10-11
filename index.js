const express = require("express");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const connect = require("./db/mongoose");
const apiRoute = require("./Routes/ApiRoute");
const productRoute = require("./Routes/ProductRoute");
const CartRoute = require("./Routes/CartRoute");
const userdbroute = require("./Routes/userdbroute");
const orderRoute = require("./Routes/OrderRoute");

dotenv.config();

const port = process.env.PORT

app.use(express.json());

const corsOption = {
    origin: "*",
}

app.use(cors(corsOption))

app.use("/api", apiRoute);
app.use("/userdata", userdbroute)
app.use("/products", productRoute)
app.use("/cart", CartRoute)
app.use("/order", orderRoute)

app.get("/", (req, res)=>{
    res.send("Home Page is Renderings")
});



app.listen(port, async()=>{
    try{
        console.log(`Server is running on port ${port} `);
        await connect()
    }catch(err){
        console.log("Somthing was wrong", err.message);
    }
})