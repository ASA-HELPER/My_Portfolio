import React from 'react'
import {ReactNavbar} from 'overlay-navbar'

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="rgb(178, 34, 34)" 
    navColor2="rgb(244,164,96)"
    burgerColor="rgb(26, 19, 19)"
    burgerColorHover="rgb(244,164,96)"
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
    link1ColorHover="rgb(178, 34, 34)"
    link1Color="rgb(26, 19, 19)"
    link1Size="1.5rem"
    link1padding="3vmax"
    // link1BackgroundColor="rgb(178, 34, 34)"
    // link1Border="1px solid black"
    />
  )
}

export default Header