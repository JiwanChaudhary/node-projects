import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Secret from './pages/Secret'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Secret />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
