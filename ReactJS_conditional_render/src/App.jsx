import StatusMessage from './StatusMessage';
import { useState } from 'react';
import './App.css';
function App() {
  const [status, setStatus] = useState("idle");
  const [IsLoggedIn,setIsLoggedIn]=useState(false);

  if(!IsLoggedIn)
  {
    return(
    <h2>You are Anonymous User...Please Login here to view the content
        <button onClick={()=>setIsLoggedIn(true)}>Simulate Login</button>
    </h2>
    );
  }
  return (
     <div>
      <h3>Controls to Check Conditional Rendering in ReactJS </h3>
      <p>Login Status:{IsLoggedIn?<h1 className='a'>Logged In</h1>:<h1 className='b'>Logged Out</h1>}</p>
      <p>
        <button onClick={()=>setIsLoggedIn(true)}>Simulate Login</button>
        <button onClick={()=>setIsLoggedIn(false)}>Simulate LogOut</button>
        
      </p>
      <p>
        <StatusMessage status={status}></StatusMessage>
      </p>
      <p>
        <button onClick={()=>setStatus("loading")}>Simulate Loading</button>
        <button onClick={()=>setStatus("success")}>Simulate Success</button>
        <button onClick={()=>setStatus("error")}>Simulate Error</button>
      </p>
      
    </div>
    
  );
}

export default App
