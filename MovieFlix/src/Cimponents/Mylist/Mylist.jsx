// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Mylist.css';

const Mylist = () => {
    const moviesURL = import.meta.env.VITE_API
    const apiKey = import.meta.env.VITE_API_KEY

const [topmovies,setTopmovies] = useState([])

const getratedMovies = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}`)
    .then((response) => response.json())
    .then((topMovies) => setTopmovies(topMovies))
}, []);

    
  }, [];

  return (
    <div>
      {}
    </div>
  );
};

export default Mylist;
