import React, { useState } from 'react'
import Header from './header/Header'
import SideBar from './sideBar/SideBar'

const NavigationLayout = (props) => {
  const [isVisible, setIsVisible]=useState(false);

  function changeVisibility(){
    setIsVisible(prevValue=>!prevValue);
  }
  return (
    <>
      <Header changeVisibility={changeVisibility} whiteBackground={props.whiteBackground}/>
      {isVisible && <SideBar hideSideBar={changeVisibility}/>}
    </>
  )
}

export default NavigationLayout