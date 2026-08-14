const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const port = 7474;

app.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
});
app.use(cookieParser("secured"));
app.get('/',(req,res)=>{
    res.send("Welcome to Cookie Demo");
});
app.get('/create-cookie',(req,res)=>{
res.cookie("no_of_visits",1);
res.cookie("user_profile","admin",{
    maxAge: 2*60*1000,
    signed:true
});
res.send("Cookie is created");
});
app.get('/read-cookie',(req,res)=>{
    let no_of_visits=req.cookies.no_of_visits;
    res.cookie("no_of_visits",++no_of_visits);
    res.send("No. of Visits:"+no_of_visits+"<br>User Profile:"+req.signedCookies.user_profile);
});
app.get('/clear-cookie',(req,res)=>{
    res.clearCookie("no_of_visits");
    res.send("Cookies are cleared");
});