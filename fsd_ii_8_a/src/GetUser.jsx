import { useContext, useRef } from "react"
import { UserContext } from "./UserContext"
import './App.css'
function GetUser()
{
    const {user,setUser}=useContext(UserContext)
    const UserInput =useRef(null)
    const changeUser=()=>{
        setUser(UserInput.current.value)
    }
    return(
        <div className="card1">
           <h2>Get User Functional Component</h2>
            <label>Enter User Name:</label>
            <input type="text" name="username" ref={UserInput}/>
            <button onClick={changeUser}>Change User</button>
     
        </div>
    )
}

export default GetUser