import mongoose from "mongoose";

function dbConnect(){
    mongoose.connect("mongodb://127.0.0.1:27017/blog-data")
    .then(()=> console.log("connected"))
    .catch((err)=> console.log(err))
}

export default dbConnect