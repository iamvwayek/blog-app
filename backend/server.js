import express from "express"
import dbConnect from "./db/db.js";
import Blog from "./model/blog.js";

const app = express()
const port = 4000;

dbConnect()

const result = await Blog.create({
    title: "Title 01",
    description: "Des...... 01"
})

console.log(result);


app.get("/", (req,res)=>{
    res.send("hello from server")
})

app.post("/create", (req,res)=>{
    res.send("created")
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