import { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard'
import Search from './assets/search.svg'
import './App.css'
//f680daf5

const API_KEY='http://www.omdbapi.com?apikey=f680daf5'

function App() {
  const[movie ,setMovie]=useState([]);
  
  const [search, setSearch]=useState('');
  
  useEffect(()=>{ 
searchMovies('Avengers');
},[]);

  const searchMovies=async(title)=>{
  const response=await fetch(`${API_KEY}&s=${title}`);
  const data=await response.json();
  setMovie(data.Search);
  }




  return (
    <>
<div className='flex-col items-center justify-center app'>
  
  <h1 className='flex justify-center p-4 font-serif text-6xl font-bold text-transparent bg-gradient-to-r from-red-700 bg-clip-text'>Movie App </h1>
 
  <div className='flex items-center justify-center search'>
    
    <input className='relative flex h-10 text-center bg-white rounded-full w-80 cursor-text '
    value={search} 
    type='text'
    placeholder='Search For Movies'  
    onChange={(e)=> setSearch(e.target.value)} />
    
   <img className='absolute cursor-pointer pr-60 group-hover:text-right '  
   src={Search}
   onClick={()=>searchMovies(search)}
   alt='search'/>
    </div>   
  {
    movie?.length > 0 ?(
    <div className='container grid grid-flow-row gap-10 py-8 gridjustify-between sm:grid-cols-4 '>
      {movie.map((movie)=>(<MovieCard movie={movie}/>))}
 </div>

):(
  <div className='empty'><h2 className='flex items-center justify-center p-10 m-10 text-5xl text-white'>No movies found...</h2></div>
)
  }
</div>
    
</>
  )
}

export default App
