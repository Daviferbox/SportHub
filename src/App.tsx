import {  Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Detais from './pages/detalhes'
import './App.css'
import ListaCard from './components/ListaCard'
import DetaisAll from './pages/detaisAll'
import Sobre from './pages/sobre'
import Manager from './pages/manager'
import RedefinirSenha from './pages/redefinirSenha'
import RegistroForm from './pages/register'
import CadastroEscola from './pages/cadastroEscola'
import EscolhaCadastro from './pages/escolhaCadastro'
import CadastroEvento from './pages/cadastroEvento'
import ListaEventos from './pages/listaEventos'



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
        <Route path="/register" element={<RegistroForm />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/listacard" element={<ListaCard />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path='/escolher-cadastro' element={<EscolhaCadastro />} />
        <Route path='/cadastrar-escola' element={<CadastroEscola />} />
        <Route path='/cadastrar-evento' element={<CadastroEvento />} />
        <Route path='/eventos' element={<ListaEventos/>} />
      </Routes> 
       </div> 
  
  )
}

export default App