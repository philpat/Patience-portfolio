import {Routes, Route} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import Home from './pages/Home'
// import About from './pages/About'
import Loader from "react-js-loader";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  

  return (
    <>
    {
      isLoading ?<div className='flex justify-center items-center min-h-screen bg-[#171A2B] text-white text-2xl font-bold'>
       Patience Portfolio Loading <Loader type='bubble-loop'/>
      </div>:<Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/about'  element={<About />} /> */}
    </Routes>
    }
    
    </>
  )
}

export default App
