import React from 'react'
import './index.css'
const MovieCard = ({movie}) => {
  return (
    <div>

            <div key={movie.imdbID} className='card ' >
      <div className='flex justify-center text-3xl text-slate-100'>
          <p>{movie.Year}</p>
       </div>
       <div className='relative'>
          <img className='w-full h-64' src={movie.Poster!=='N/A'? movie.Poster:'https://via.placeholder.com/400'} alt={movie.Title}/>
       </div>
       <div  className='absolute bottom-0 left-0 right-0 h-16 text-white bg-black border rounded rounded-b-lg opacity-75' >
        <span className='text-xl' >{movie.Type}</span>
        <h3>{movie.Title}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default MovieCard
