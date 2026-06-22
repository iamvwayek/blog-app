import express from "express"
import {config} from 'dotenv'

import dbConnect from "./db/db.js";
import Blog from "./model/blog.js";

// server setup
const app = express()
const port = 4000;

// db and env config
config()
dbConnect()

// middlewares
app.use(express.urlencoded({extended: false}))

// routes
app.get("/", (req,res)=>{
    res.send("hello from server")
})

app.get("/blogs", async(req,res)=>{
    try {
        const result = await Blog.find({},{__v: 0})
        res.status(200).json({success: true, data: result})   
    } catch (error) {
        res.status(500).json({success: false, msg: "Not able to fetch!"})
    }

})

app.post("/create", async (req,res)=>{
    try{
        const newTitle = req.body.title
        const newDescription = req.body.description

        if(!newTitle || !newDescription){
            return res.status(400).json({success: false, msg: "Something is missing!"})
        }

        const { _id, title, description, createdAt, updatedAt} = await Blog.create({
            title: newTitle,
            description: newDescription
        })

        res.status(201).json({success: true, data: {_id, title, description, createdAt, updatedAt}})
    }catch(error){
        res.status(500).json({success: false, msg: "Not created!"})
    }
    
})

app.put("/edit/:id", async(req,res)=>{

    try {
        const id = req.params.id
        const updatedTitle = req.body.title
        const updatedDescription = req.body.description
    
        if(!updatedTitle || !updatedDescription){
                return res.status(400).json({success: false, msg: "Something is missing!"})
            }
            
            const {_id, title, description, createdAt, updatedAt} = await Blog.findByIdAndUpdate(
                {_id: id},
                {title: updatedTitle, description: updatedDescription},
                {new: true}
            )
            res.status(200).json({success: true, data: {_id, title, description, createdAt, updatedAt}})
            
    } catch (error) {
         res.status(500).json({success: false, msg: "Unable to update!"})
        }

    
})

app.delete("/delete/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const result = await Blog.findByIdAndDelete(_id)
        if(!result){
            return res.status(400).json({success: false, msg: "Blog not found!"})
        }
        res.status(200).json({success: true, msg: "Deleted successfully!"})
    } catch (error) {
         res.status(500).json({success: false, msg: "Unable to delete!"})   
    }
})

app.listen(port, (err)=>{
    if(err) console.log(err);
    console.log(`http://localhost:${port}`);
})