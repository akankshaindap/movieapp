import { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard'
import Search from './assets/search.svg'


import './App.css'
function App() {
  const[movie ,setMovie]=useState([]);
  
  const [search, setSearch]=useState('');
  
  useEffect(()=>{ 
searchMovies('Avengers');
},[]);
  const API_KEY='https://www.omdbapi.com/?i=tt3896198&apikey=f680daf5'

  const searchMovies=async(title)=>{
  const response=await fetch(`${API_KEY}&s=${title}`);
  const data=await response.json();
  setMovie(data.Search);
  }
console.log(API_KEY);

  return (
    <>
      <div className="flex-wrap items-center justify-center">
        <h1 className="flex justify-center p-4 font-serif text-6xl font-bold text-transparent bg-gradient-to-r from-red-600 bg-clip-text xs:text-4xl sm:text-5xl lg:text-7xl md:text-6xl">
          Movie App
        </h1>

        <div className="flex items-center justify-center w-auto p-3 search ">
          <input
            className="relative flex h-10 text-xl text-center bg-white rounded-full w-80 cursor-text lg:w-128   xs:-ml-4"
            value={search}
            type="text"
            placeholder="Search For Movies"
            onChange={(e) => setSearch(e.target.value)}
          />

          <img
            className="absolute -ml-72 lg:-ml-120"
            src={Search}
            onClick={() => searchMovies(search)}
            alt="search"
          />
        </div>
        {movie?.length > 0 ? (
          <div className="container">
            {movie.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2 className="flex items-center justify-center p-10 m-10 text-5xl text-white">
              No movies found...
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App
