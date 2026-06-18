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

app.post("/create", async (req,res)=>{
    try{
        const newTitle = req.body.title
        const newDescription = req.body.description

        const {title, description, createdAt, updatedAt} = await Blog.create({
            title: newTitle,
            description: newDescription
        })
        res.json({success: true, data: {title, description, createdAt, updatedAt}}).status(201)
    }catch(error){
        res.json({success: false, error: "not created"}).status(500)
    }
    
})

app.patch("/edit/:id", (req,res)=>{
    res.send("edited")
})

app.delete("/delete/:id", (req,res)=>{
    res.send("deleted")
})

app.listen(port, (err)=>{
    if(err) console.log(err);
    console.log(`http://localhost:${port}`);
})