const exp=require('express');
const app=exp();
const users=[];
const port=7070;
app.set('view engine','ejs');
app.get(':user',(req,res)=>{
    res.render('welcome',{title:'PVPSIT',uname:req.params.user});
});
app.get('/form',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
});
app.post('/submit',(req,res)=>{
let user={
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
    };
    users.push(user);
    res.send('Form submitted successfully');
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});