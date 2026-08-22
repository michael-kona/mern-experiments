
function App() {
  const cricketer={
    name:'Sachin Tedulkar',
    isActive:false,
    role:'Alrounder',
    age:'42',
    format:['ODI','T20','Test'],
    avatarURL:'https://i.pravatar.cc/150?img=67'
  }
  const handleAlert=()=>{alert(`Opening profile of ${cricketer.name}`)};
  return (
          <div className='card-container'>
            <img src={cricketer.avatarURL} alt={cricketer.name} className="avatar"/>
            <h1 style={{color:'blue',marginBottom:'4px'}}>{cricketer.name}</h1>
            <h1>{cricketer.role}</h1>
            {cricketer.isActive?(<h2>Currently Playing</h2>):(<h2>Retired</h2>)}
            <h3>Formats Played</h3>
            <ul>
              {cricketer.format.map((format,index)=>(
                <li key={index}>{format}</li>
              ))}
            </ul>
            <button onClick={handleAlert} 
            style={{backgroundColor:'brown',
              color:'green',
              padding:'8px 16px',
              border:'none',
              borderRadius:'4px',
              cursor:'pointer'
            }}>Connect</button>
          </div>
  );
}

export default App
