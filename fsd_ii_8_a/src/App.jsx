  import { useState } from 'react'
import GetUser from './GetUser.jsx'
import ShowUser from './ShowUser.jsx'
import { UserContext } from './UserContext.jsx'
import Parent from './Parent.jsx'
function App() {
  
const [user,setUser] = useState(null)
  return (
    <div>
    <h1>ReactApp for sharing Data between Components</h1>
    <h2>Using UseContext():</h2>
    <UserContext.Provider value={{user,setUser}}>
      <ShowUser></ShowUser>
        <GetUser></GetUser>
    </UserContext.Provider>
    <h2>Sending Data from Child to Parent</h2>
    <Parent></Parent>
    </div>
  )
}

export default App
