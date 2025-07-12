const express = require("express")
const app=express()


app.use(express.json())  //ye middleware jo ki use for read req.body
let notes=[]

app.get('/',(req,res)=>{
    res.send("radhe radhe")
})


// create nortes
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.json(
        {
            message:"Note created successfully"
        }
    )
})

// delete notes with help of req.params.index
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    delete notes[index]

    res.json({
        message:"note deleted successfully"

    })
})


// PATCH -> note updated on the server 
app.patch('/notes/:index',(req,res)=>{
    const index =req.params.index;
    const {title}=req.body;

    notes[index].title=title;

    res.json({
        message:"note updated successfully"
    })
})


// show ALL notes
app.get('/notes',(req,res)=>{
    res.json(notes);
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on 3000 port")
})