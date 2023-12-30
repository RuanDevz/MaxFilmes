import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Movie from './Pages/Movie/Movie.jsx'
import Tvshows from './Pages/Search/Tvshows.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='movie' element={<Movie/>}></Route>
        <Route path='tvshows' element={<Tvshows/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
