const exp=require('express')
const app=exp()
const port=7474
app.set("view engine","ejs");
app.listen(port,(req,res)=>{
console.log(`http://localhost:${port}`);
});
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("input.ejs");
});
app.get("/multiply",(req,res)=>{
   
        console.log(req.query.txt_num)
        res.render("multiply.ejs",{t_name:"Multiplication Table",n:req.query.txt_num});
});
app.post("/multiply",(req,res)=>{
   
        console.log(req.body.txt_num)
        res.render("multiply.ejs",{t_name:"Multiplication Table",n:req.body.txt_num});
});