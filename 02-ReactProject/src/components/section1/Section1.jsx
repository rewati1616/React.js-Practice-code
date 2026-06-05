import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'
import LeftContent from './LeftContent'
import Page1Content from './Page1Content'


const Section1 = (props) => {
  
  return (
    <div>
      <Navbar/>
      <Page1Content users={props.users}/>
    </div>

  )
}

export default Section1