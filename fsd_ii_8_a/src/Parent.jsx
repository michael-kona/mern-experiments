import { useState } from "react";
import Child from './Child'
function Parent()
{
    const [message,setMessage]=useState('msg')
    const handleDataFromChild=(data)=>{
        alert("hi")
        setMessage(data)
    }
    return(
        <div>
            Message from Child:{message}
            <Child callbackname={handleDataFromChild}></Child>
        </div>
    )
}

export default Parent