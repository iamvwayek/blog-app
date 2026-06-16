import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
},{timestamps: true})

const Blog = mongoose.model("blog", blogSchema)

export default Blog