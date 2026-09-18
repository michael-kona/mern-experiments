import { useState } from 'react'
import './App.css'

function App() {
  const [studentData, setStudentData] = useState(
    {
      roll:'',
      sname:'',
      IsSubscribed:false,
      gender:'male',
      course:''
    }
  )
  const [submitted,setSubmitted]=useState(false);
const handleChange=(e)=>{
  const {name,value,type,checked} = e.target;
  alert(`type:${type},name:${name},value:${value},checked:${checked}`);
  if(type==="text"){
    setStudentData((prev)=>({...prev,[name]:value}));
  }
  if(type==='checkbox'){
    setStudentData((prev)=>({...prev,[name]:checked}));
  }
  if(name==='gender'){
    setStudentData((prev)=>({...prev,[name]:value}));
  }
  if(type==='select-one')
  {
    setStudentData((prev)=>({...prev,[name]:value}));
  }
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setSubmitted(true);
console.log(studentData);
alert(JSON.stringify(studentData));
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Student Registration ReactJS Form</h1>
        <label>Student Roll:</label>
        <input type="text" name="roll" value={studentData.roll} onChange={handleChange} required/>
        </div>
        <div>
        <label>Student Name:</label>
        <input type="text" name="sname" value={studentData.sname} onChange={handleChange} required/>
        </div>
        <div>
          <label>IsSubscribed:</label>
          <input type='checkbox' name='IsSubscribed' checked={studentData.IsSubscribed} onChange={handleChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type='radio' name='gender' value='male' checked={studentData.gender==='male'} onChange={handleChange}/>Male
          <input type='radio' name='gender' value='female' checked={studentData.gender==='female'} onChange={handleChange}/>Female
        </div>
        <div>
          <label>Select the Courses interested:</label>
          <select name="course" onChange={handleChange}>
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
          </select>
        </div>
      <button type="submit">submit Form</button>
      </form>
      <div style={{backgroundColor:'yellowgreen',padding:'1px',marginLeft:'200px',marginRight:'200px',marginTop:'10px',borderRadius:'5px'}}>
        <h3>Live Form State:</h3>
        <pre>{JSON.stringify(studentData)}</pre>
      </div>

      </div>

  );
}

export default App
