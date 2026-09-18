import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'


import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <img src="https://www.pvpsiddhartha.ac.in/new_images/header_f.jpg"></img>
    <nav style={{margin:'20px'}}>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>
      </nav>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>  
  )
}
export default App
