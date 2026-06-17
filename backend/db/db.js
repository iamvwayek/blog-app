import mongoose from "mongoose";

function dbConnect(){
    mongoose.connect( process.env.DB_STRING + "/blog-data")
    .then(()=> console.log("connected"))
    .catch((err)=> console.log(err))
}

export default dbConnect