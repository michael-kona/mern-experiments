const express = require('express');
const app=express();
const PORT=7474;
let students = [
    {id:1, name:"John Doe", age:20},
    {id:2, name:"Jane Smith", age:22},
    {id:3, name:"Michael Johnson", age:19}
];

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use((req,res,next)=>{
    console.log(`Server received a request using th method:${req.method} and URL: ${req.url}`);
    next();
});

app.get("/",(req,res)=>{
    //res.send("Hello World");
    res.sendFile(__dirname + "/welcome.html");
});

app.get("/students",(req,res)=>{
    res.json(students);
});

app.get("/students/:id",(req,res)=>{
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).send("Student not found");
    }
    res.json(student);
});
app.post("/students",(req,res)=>{
    const newStudent = { "id": students.length + 1, "name": req.body.name, "age": req.body.age };
    students.push(newStudent);
    res.status(201).json(newStudent);
});
app.put("/students/:id",(req,res)=>{
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).send("Student not found");
    }
    student.name = req.params.name || student.name;
    student.age = req.params.age || student.age;
    res.json(student);
});
app.delete("/students/:id",(req,res)=>{
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex === -1) {
        return res.status(404).send("Student not found");
    }
    students.splice(studentIndex, 1);
    res.status(200).send("Student deleted");
});