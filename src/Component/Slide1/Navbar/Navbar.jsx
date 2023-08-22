import React from 'react'
import Logo from '../Logo/Logo'
import NavbarContent from '../Navbarcontent/NavbarContent'
import Contact from '../Contact/Contact';
import'./Navbar.css'

function Navbar() {
  return (
    <nav className='Navbar'>
        <Logo />
        <NavbarContent />
        <Contact />
    </nav>
  )
}

export default Navbar