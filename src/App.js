import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css"
import Navigation from './component/Navigation'
import Center from './component/Center'
import Companies from "./component/Companies"
import Our_programs from "./component/Our_programs"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import MainHeader from "./component/MainHeader"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Teaching from './component/Teaching'
import Reviews from './component/Reviews'
import Footer from './component/Footer'
import Features from './component/Features'
import Navbar from './Navbar'




function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
              <Route path="/" element={ <MainHeader/> } >
              <Route index element={<Home/>} />
              <Route path="about" element={ <About/> } />
              <Route path="contact" element={ <Contact/> } />
              <Route path="Teaching" element={<Teaching/>} />
              </Route>
        </Routes>
      </BrowserRouter> */}
      <Navigation/>
      <Center/>
      <Companies/>
      <Our_programs/>
      <Reviews/>
      <Features/>
      <Footer/>
      
      
      

     
    </>
  )
}

export default App
