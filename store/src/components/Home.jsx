import React from 'react'
import '../App.css'
import Newsletter from './Newsletter'
import Homesec1 from './Homesec1'
import Homesec2 from './Homesec2'

const Home = () => {
  return (
    <div>
      <Homesec1/>
      <Homesec2/> 
         <hr className='custom-hr2'/>
    <Newsletter/>
    <hr className='custom-hr3' />

        </div>
  )
}

export default Home
