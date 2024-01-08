// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Mylist.css';

const Mylist = () => {
  const [movies, setMovies] = useState([]);
  const ApiKey = '1b46e6a73b984225eb9cea8cbb8d2f81';
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results))
  }, []);

  return (
    <div>
      {movies.map((movie) =>{
        return(
          <div key={movie.id}>
            <a href="#"><img src={`${image_path}${movie.poster_path}`} alt="" /></a>
            <span>{movie.title}</span>
          </div>
        )
      })}
    </div>
  );
};

export default Mylist;
