function Child({callbackname})
{
    const call_callback=()=>
    {
        callbackname("Hi I'm Child");
    }
    return(
        <div>
            <button onClick={call_callback}>Send Data to Parent</button>
        </div>
    )
}

export default Child