import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Createjobs from './Components/Jobs/Createjobs';
import Getjob from './Components/Jobs/Getjob';
import UpdateJob from './Components/Jobs/UpdateJob';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import About from './Components/Company/About';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/createjob' element={<Createjobs/>}></Route>
      <Route path='/getjob' element={<Getjob />}></Route>
      <Route path='/about' element={<About />}></Route>

      <Route path='/edit/:id' element={<UpdateJob />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>


      

      {/* <Route element={<Home/>} ></Route> */}


    </Routes>


    </BrowserRouter>
  )
}

export default App
