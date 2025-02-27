import React from 'react'
import './index.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
const App = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden bg-black  text-white'>
    <Nav/>
    <Hero/>
    </div>
  )
}

export default App
