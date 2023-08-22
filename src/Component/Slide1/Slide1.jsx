import React from 'react'
import Navbar from './Navbar/Navbar'
import './Slide1.css'
import Slide1Content from './Slide1Content/Slide1Content'

const Slide1 = () => {
  return (
    <div className='slide1' id="slide1">
       <Navbar />
       <Slide1Content/>
    </div>
  )
}

export default Slide1