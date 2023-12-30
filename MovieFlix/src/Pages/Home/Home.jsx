// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'
import Navbar from '../../Cimponents/Navbar/Navbar'
import Destaques from '../../Cimponents/Destaques/Destaques'

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <Destaques />
    </div>
  )
}

export default Home
