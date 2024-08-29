import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListaLivros from './pages/ListaLivros'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Navbar from './components/Navbar'

const App = () => {
  const books = [
    { title: 'Livro 1', author: 'Henrique Ambrosi' },
    { title: 'Livro 2', author: 'Henrique Ambrosi' },
  ]

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<ListaLivros books={books} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
