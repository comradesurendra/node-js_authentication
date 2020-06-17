var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var user=[];
app.set("view-engine","ejs");
app.use(bodyParser());

app.get("/",(req,res)=>{
  res.render("index.ejs",{name:"Vanshu"})
})

app.get("/login",(req,res)=>{
  res.render("login.ejs")
})

app.get("/register",(req,res)=>{
  res.render("register.ejs",{name:"Vanshu"})
})

app.post("/login",(req,res)=>{

})

app.post("/register",(req,res)=>{
  console.log(req.body);
})


app.listen(3000,()=>{
  console.log("Starting the application");
})