const express=require("express");
const session=require("express-session");
const server=express();
const port=4747;
server.listen(port,(req,res)=>{
    console.log(`http://localhost:${port}`);
});
server.set("view engine","ejs");
server.use(session({
    name:"user-session",
    secret:"super-key-74",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httponly:true,
        secure:false,
        maxAge:1000*60*2
    }
}));
server.use((req,res,next)=>{
    res.locals.session=req.session||null;
    next();
});
server.get('/',(req,res)=>{
                res.render("login.ejs");
        });
server.get('/first',(req,res)=>{
    res.render("first.ejs");
});
server.get('/second',(req,res)=>{
    res.render("second.ejs");
});
server.get('/login',(req,res)=>{
    const uname=req.query.txt_uname;
    const upwd=req.query.txt_upwd;
    if(uname==="mike"&&upwd==="1234")
    {
        req.session.uname=uname;
        console.log("session variable created");
        res.render("first.ejs");
    }
    else{
    res.send("Invalid User Credentials<br><a href=/>login here again</a>");
    }
});

server.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("Problem in Logging Out");
            res.send("Problem in Logging out");
        }
        res.clearCookie("user-session");
        console.log("Session Killed");
        res.send("Session Killed... Logged Out");
    });
});