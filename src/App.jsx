import { useState } from 'react'
import Login from "./ui/Login"
import Register from "./ui/Register"
import Chat from './ui/Chat'
import Contact from "./ui/Contact"
import { io } from 'socket.io-client'
import { useStore } from './ui/lib/store/store'
import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="/chat" Component={Chat} />
        <Route path="/chat/:chat" Component={Contact}/>
      </Routes>
    </Router>
  )
}

export default App
