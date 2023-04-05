import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from '../../Images/logo.PNG'
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="rgb(178, 34, 34)" 
    navColor2="#E8DF6C"
    burgerColor="rgb(26, 19, 19)"
    burgerColorHover="#E8DF6C"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="rgb(26, 19, 19)"
    link1Color="rgb(178, 34, 34)"
    link1Size="1.5rem"
    link1padding="3vmax"
    logo={logo}
    logoWidth="250px"
    logoHoverColor="#E8DF6C"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="rgb(178, 34, 34)"
    profileIconColorHover="rgb(26, 19, 19)"
    />
  )
}

export default Header