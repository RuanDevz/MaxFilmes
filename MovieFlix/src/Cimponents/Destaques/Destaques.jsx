// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Destaques.css'
import { IoIosAddCircleOutline } from "react-icons/io";


const Destaques = () => {
  return (
    <div className='conteudo'>
      <h1>Vida</h1>
      <div className='infos'>
        <span>Genero do filme</span>
        <span className='imdb'>IMDB</span>
        <span>2020</span>
      </div>
      <div className='buttonplay'>
        <button>PLAY</button>
        <IoIosAddCircleOutline className='add' />
      </div>
      <div className='listadefilmes'>
        <h2>My List</h2>
      </div>
    </div>
  )
}

export default Destaques
