import {  Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Detais from './pages/detais'
import Register from './pages/register'
import './App.css'
import ListaCard from './components/ListaCard'
import DetaisAll from './pages/detaisAll'

function App() {
  return (  
      // <div id="app">
        
       <div className="routes-container">    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalhes/:id" element={<Detais />} />
        <Route path="/detalhesGeral" element={<DetaisAll />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listacard" element={<ListaCard />} />
      </Routes> 
       </div> 
  
    // </div>     
  
  )
}

export default App