import React from 'react'
import './index.css'
const MovieCard = ({movie}) => {
  return (
    <div>

            <div key={movie.imdbID} className='relative flex-wrap overflow-hidden border-4 cursor-pointer m-9 rounded-xl bg-gradient-to-r from-gray-500 hover:scale-110 sm:w-72 w-80'   >
      <div className='flex justify-center text-3xl text-slate-100'>
          <p>{movie.Year}</p>
       </div>
       <div className='relative '>
          <img  className="w-full h-96 rounded-b-2xl"src={movie.Poster!=='N/A'? movie.Poster:'https://via.placeholder.com/400'} alt={movie.Title}/>
       </div>
       <div  className='absolute bottom-0 left-0 right-0 px-3 py-5 text-white bg-black rounded-b-2xl bg-opacity-70'>
        <span className='text-xl' >{movie.Type}</span>
        <h3>{movie.Title}</h3>
        </div>
      </div>
      
    </div>
  )
}

export default MovieCard
