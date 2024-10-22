import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import PerfHigh from '../Components/Sliders/PerfHigh'
import Messages from '../Components/Messages/Messages'
import Bod from '../assets/Bod/Bod'

const Home = () => {
  return (
    <div className=''>
        <Cover />
        <About />
        <PerfHigh/>
        <Messages/>
        <Bod/>

    </div>
  )
}

export default Home