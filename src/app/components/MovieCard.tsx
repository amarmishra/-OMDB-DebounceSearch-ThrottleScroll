import React from 'react'
import { useDispatch } from 'react-redux'

export type Movie={
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": string,
    "Poster": string
}
type MovieCardProps={
    movie:Movie
}

export const MovieCard = (
    {movie}:MovieCardProps
) => {
    // const dispatch = useDispatch(); 
  return (
    <div className='flex flex-col justify-between items-center 
    w-[18rem] h-[25rem] 
    bg-gray-400 rounded-lg shadow-lg shadow-amber-300
     border-y-gray-700 text-yellow-300 
    hover:scale-x-120 mx-auto my-3 p-3 sm:grow-0 grow' >
       
        <div id="poster-img" className='sm:h-5/6 sm:w-4/5 w-[14rem] h-[calc(90% + 1rem)] 
                 rounded-lg shadow-l shadow-amber-100 ' >
            <img src={movie.Poster} className='w-full h-full'></img></div>
            <div className='boder border-purple-400'>
                <div><strong>{movie.Title}</strong></div>
                <span>{movie.Year}</span>
        </div>
    </div>
  )
}

