import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
         <Route path='/' element = {<Home />} />
        {/* <Route path='navbar' element = {<Navbar />} /> */}
         {/* <Route path='/' element = {<Footer />} /> */}
          
    
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
