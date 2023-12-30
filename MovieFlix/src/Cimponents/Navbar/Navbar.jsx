// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { MdComputer } from "react-icons/md";




const Nabbar = () => {
  return (
    <div className='container'>
      <nav>
        <ul className='navbar'>
        <Link><h1>MovieFlix</h1></Link>
            <li><Link to="/"><IoIosHome/>Home</Link></li>
            <li><Link to="/movie"><BiMoviePlay/>Movie</Link></li>
            <li><Link to="/tvshows"> <MdComputer />Tv Shows</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nabbar
