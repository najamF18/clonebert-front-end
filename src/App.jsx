import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from "./login"
import SignUp from './signup'
import Home from './pages/Home'
import Logout from './logout'
import ForgotPasswordForm from './forgotpassword'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css';
function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPasswordForm/>}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;