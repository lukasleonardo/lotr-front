import React, { useEffect, useRef, useState } from 'react'
import icon from '../../assets/Icon.svg'
import {TopHeader,Container} from './styles'

const Header = ({movies, setFilteredMovies, filteredMovies}) => {
  const input = useRef()
  const filterBy = useRef("")
  
  const [filter, setfilter] = useState('')
  const [avgValues, setAvgValues] = useState({
    runtimeAvg:0,
    budgetAvg:0,
  })
  
  function searchByName(){
    const value = input.current.value

    const filteredMovie = movies.filter( movies => movies.name.toLowerCase().includes(value.toLowerCase()))

    setAvgMovies(filteredMovie)
    setFilteredMovies(filteredMovie)
  }

  function setAvgMovies(movieList){
    const runtimeAvg = movieList.reduce((acc, curr)=>acc + curr.runtimeInMinutes,0)/movieList.length

    const budgetAvg = movieList.reduce((acc, curr)=>acc + curr.budgetInMillions,0) / movieList.length

    setAvgValues({
      runtimeAvg,
      budgetAvg,
    })
   
  }

  function filterMovies(){
    if(filteredMovies && filteredMovies.length > 0){
    const filterFactor = filterBy.current.value
    let sortedMovies
      if(filterFactor=='name'){
        sortedMovies = [...filteredMovies].sort((a,b)=> a.name.localeCompare(b.name))
        console.log(sortedMovies)
      }
      else if(filterFactor=='length'){
        sortedMovies = [...filteredMovies].sort((a,b)=>Number(b.runtimeInMinutes)-Number(a.runtimeInMinutes))
        console.log(sortedMovies)
      }else if(filterFactor==='revenue'){
        sortedMovies = [...filteredMovies].sort((a,b)=>Number(b.boxOfficeRevenueInMillions)-Number(a.boxOfficeRevenueInMillions))
      }
      else if(filterFactor==='budget'){
        sortedMovies = [...filteredMovies].sort((a,b)=>Number(b.budgetInMillions)-Number(a.budgetInMillions))
      }else{
        sortedMovies=movies
      }

      setFilteredMovies(sortedMovies)
    }
  }

  useEffect(()=>{
    if(movies && movies.length > 0)
    setAvgMovies(movies)
  },[movies])

  return (
      <>
        
        <TopHeader>
          <img src={icon} alt="logo empresa" />
          <p>Senior Frontend Test -</p>
        </TopHeader>
        <Container>
          <h1>Lord of the Rings Movies</h1>
          <div className='info-container'>
            <div className='text-container'>
              <p>Ave. movie runtime: {avgValues.runtimeAvg.toFixed(0)} min</p>
              <p>Ave. movie budget: ${avgValues.budgetAvg.toFixed(1)}M</p>
            </div>
            <div className="input-container">
              <input ref={input} onChange={searchByName} type="text" placeholder='Finter movies by name'/>
              <select onChange={filterMovies} ref={filterBy}>
              <option value="" defaultValue=''> Filter </option>
                <option value="name"> Sort By Name </option>
                <option value="budget">Sort By Budget</option>
                <option value="revenue">Sort by Revenue</option>
                <option value="length">Sort by Movie Length</option>  
              </select>
            </div>
          </div>
        </Container>
     
      </>
  )
}

export default Header


/*
      else if(filterFactor==='revenue'){
        sortedMovies = filteredMovies.boxOfficeRevenueInMillions.sort((a,b)=>a-b)
      }
      else if(filterFactor==='budget'){
        sortedMovies = filteredMovies.budgetInMillions.sort((a,b)=>a-b)
      }
      
      
*/