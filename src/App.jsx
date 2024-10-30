import React from 'react'
import {Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MyAppointment from './pages/MyAppointment'
 const App = () => {
   return (
     <div className='mx-3 sm:mx-[5%]'>

          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} /> 
            <Route path='/doctors' element={<Doctors/>} /> 
            <Route path='/doctors/:speciality' element={<Doctors/>} /> 
            <Route path='/about' element={<About/>} /> 
            <Route path='/contact' element={<Contact/>} /> 
            <Route path='/login' element={<Login/>} /> 
            <Route path='/profile' element={<Profile/>} /> 
            <Route path='/appointment' element={<Appointment/>} /> 
            <Route path='/appointment/:_id' element={<Appointment/>} /> 
            <Route path='/MyAppointment' element={<MyAppointment/>} />
          </Routes>
         <Footer/>
       
     </div>
   )
 }
 
 export default App
 