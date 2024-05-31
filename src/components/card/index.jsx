import React from 'react'
import { Container } from './styles'
import IconAcademy from '../../assets/academyIcon.svg'
import MovieIcon from '../../assets/movieIcon.svg'

const Card = ({movieData}) => {
  return (
    <Container>
        <div className="image-container" >
          <img src={MovieIcon} alt="movie icon" /> 
        </div>

        <div className="movie-container">
          <div>
            <h2>{movieData.name}</h2>
            <p>{movieData.runtimeInMinutes} Min</p> 
          </div>

          <div className="award-container">
          <p><img src={IconAcademy} alt="award icon" />{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
          </div>


          <div className="movie-gross">
            <div>
              <h3> Budget</h3>
              <p> ${movieData.budgetInMillions}M</p>
            </div>

            <div>
              <h3>Revenue</h3>
              <p>${movieData.boxOfficeRevenueInMillions}M</p>
            </div>
          </div>
        </div>
      
    </Container>
  )
}

export default Card

/*

<img src="" alt="" />
        <div className="movie-content">
          <div className="movie-info">
            <h1>OI</h1>
            <p></p>
            <p><img  src={IconAcademy}/>nominations</p>
          </div>
          <div className="movie-gross">
            <p className='movie-budget'> Budget ${}</p>
            <p className='movie-rev'>Revenue ${}</p>
          </div>
        </div>


            movieData.boxOfficeRevenueInMillions
            movieData.budgetInMillions
*/ 