import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const MainRotes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<h3>Page Not Found</h3>}/>
    </Routes>
  )
}

export default MainRotes