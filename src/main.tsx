import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { UsuarioLogadoProvider } from './contexts/contextsAuth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
     <UsuarioLogadoProvider>
        <App />
    </UsuarioLogadoProvider>
    </BrowserRouter>
  </React.StrictMode>
)