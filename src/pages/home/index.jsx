import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Header from '../../components/header'
import Card  from '../../components/card'
import { Container, ContainerItems } from './styles'

const Home = () => {
 const [ movies, setMovies] = useState()
 const [ filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(()=>{
    async function LoadData(){
      const {data:{docs}} = await api.get('movie')
      setMovies(docs)
      setFilteredMovies(docs)
    }
    LoadData()
    
  }, [])


  return (
    <>
    <Container>
    <Header movies={movies} setFilteredMovies={setFilteredMovies} filteredMovies={filteredMovies} />
    <ContainerItems>
      {filteredMovies && filteredMovies.map( movie =>(
        <Card key={movie._id} movieData={movie}/>
      ))}
    </ContainerItems>
    
    </Container>
    </>
  )
}

export default Home