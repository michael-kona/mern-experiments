import { UserContext } from "./UserContext";
import { useContext } from "react";
function ShowUser()
{
const {user,setUser}=useContext(UserContext)
return(
    <div className="card2">
    <h2>Show User Functional Component</h2>
    <h3>User Name:{user}</h3>
    </div>
)
}

export default ShowUser