import Navbar from '../component/Navbar';

import React from 'react'

function About() {
  const tops = '4em';
  return (
    <>
        <Navbar />
        <div style={{fontSize: '70px', fontFamily: 'fantasy', display:'flex', justifyContent: 'center', alignItems:'center', top: tops, position: 'relative'}}> This page is loading.....</div>
    </>
    
  )
}

export default About;