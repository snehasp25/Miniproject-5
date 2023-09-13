const express=require("express")
const app=express()
app.set('view engine','ejs');
const https=require("https")
const body=require("body-parser")
app.use(body.urlencoded({extended:true}))
app.use(express.static("public"))

var lists=[]


app.get("/",function(req,res){
    res.render("index",{tasks:lists})
})

app.post("/",function(req,res){
    var task=req.body.task
    // console.log(task)
    lists.push(task)
    res.redirect("/")
})

app.listen( 3001,function(){
    console.log("server is running in 3001")
})