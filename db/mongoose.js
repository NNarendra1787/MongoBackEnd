const mongoose = require("mongoose");

mongoose.set("strictQuery", true)

const url = "mongodb+srv://narendranarwade2002:Narendra2002@e-commerce-data.bc58pry.mongodb.net/?retryWrites=true&w=majority"


// const url = "mongodb+srv://narendranarwade2002:Narendra2002@project.kmdyidh.mongodb.net/?retryWrites=true&w=majority"


// const url = "mongodb+srv://narendranarwade2002:lipton123@kingcart.t1iznas.mongodb.net/?retryWrites=true&w=majority"
// const url = "mongodb+srv://narendranarwade2002:kalyani1996@kalyanitraders.a96i3u7.mongodb.net/?retryWrites=true&w=majority"

const connect = async ()=>{
    try{
        console.log("trying to connect");
        await mongoose.connect(url);
        console.log("db is connected");
    }catch(err){
        console.log(err.message, "due to this occured");
    }
}

module.exports = connect;