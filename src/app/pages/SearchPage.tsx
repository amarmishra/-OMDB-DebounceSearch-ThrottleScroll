"use client"
import { Container } from 'postcss'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import API_URLS from '../utility/api/omdb';
import { Movie,MovieCard } from '../components/MovieCard';


import {debounceInputChange,throttleScrollChange} from '../utility/debouceFunction';
import setPlaceholder from '../utility/promiseAnimation';

const SearchPage = () => {
    const [movies,setMovies]=useState<Movie[]>([])
    const [searchText,setSearchText]=useState<string>("")
    const [pageSize,setPageSize]=useState(1);
    const [currentPage,setCurrentPage]=useState(1);
    const getInput=debounceInputChange();
    const isEndOfPage=throttleScrollChange(handleScroll);
    const containerRef=useRef<HTMLDivElement>(null);

//     useEffect(()=>{
//         if(containerRef.current){
//             containerRef.current.addEventListener('scroll',(e)=>isEndOfPage(containerRef.current,searchText,pageSize+1))
//         }
      
// },[searchText,pageSize])

    async function handleScroll(e:React.UIEvent<HTMLDivElement, UIEvent>,searchFor:string,page:number){
      
            // console.log("scrolling")
            const scrollTop=e.currentTarget.scrollTop;
            const clientHeight=window.innerHeight;
            const scrollHeight=e.currentTarget.scrollHeight;
            
            
          
      
            
            if( scrollTop +  clientHeight >= scrollHeight ){
                console.log("scroll fired")
                console.log("Search for", searchText , " and page ", page+1)
         
                let res= await axios(API_URLS.search(searchText,page+1));
                
                
                
                if(res.data.Search){
                 
                    setMovies(movies.concat(res.data.Search))
                    setPageSize(pageSize+1)

                }
          }
          
        
       
    }


  

    return (
    <>
    <div className='flex flex-col h-full justify-between items-center'>
        <div className='bg-amber-300 w-full flex flex-row justify-center shadow-md shadow-blue-300'>
            <input  className='text-justify w-[90vw] max-w-md my-3 p-3 
            focus-within:outline-none shadow-sm  border-2 border-blue-400 rounded-md' 
            onChange={(e)=>{ handleChange(e);} } 
            value={searchText} placeholder='Search for a movie'></input>    
        </div>
      { movies.length &&  
        <div className='h-full overflow-y-auto border shadow-md shadow-blue-600' 
        onScroll={(e)=>{handleScroll(e,searchText,pageSize)}}>
        
            <div  className='flex flex-row flex-wrap justify-around items-center content-around p-3'>
                {    movies.map((movie)=>{
                        return <MovieCard movie={movie} key={movie.imdbID+Date.now()}/>
                    })
                }
            </div>
        </div>
        }
        
    </div>
   <div className='fixed top-1/2 right-0 rounded-full text-amber-300 bg-blue-300 p-2'>{pageSize}</div>
</>
  )

  async function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setSearchText(e.target.value)
        let res= await axios(API_URLS.search(await getInput(e)));
        if(res.data.Search){
            setPageSize(1)
            setMovies(res.data.Search)
        }
       
  }

  
}

export default SearchPage
