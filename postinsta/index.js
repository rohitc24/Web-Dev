const express=require("express");
const app=express();
const data=require("./data.json");
const path=require("path");
const port=3500;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.listen(port,()=>{
    console.log("Server is listening on the port 3500");
});
app.get("/:username",(req,res)=>{
    let {username}=req.params;
    let newdata=data[username];
    let data1=JSON.parse(newdata);
    // console.log(data1);
    res.render("show.ejs",{data1});
})