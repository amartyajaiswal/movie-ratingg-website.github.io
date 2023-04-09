import React from 'react'
import { useState,useEffect } from 'react'

import { Divider } from '@mui/material'
import { Box,styled,Typography } from '@mui/material'

import { categoryMovies } from '../services/api'
import { UPCOMING_API_URL } from '../constants/constants'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import MoviesList from '../components/MoviesList'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const StyledBanner = styled("img")`
  width: 100%;
  height: 70vh;
`
const Component = styled(Box)`
  width: 80%;
  margin: auto;
`
const Contanier = styled(Box)`
 background: #F5F5F5;
 padding: 10px;
`

const CategoryUpcoming = () => {
  const[movies,setMovies]=useState([])
  
useEffect(  () => {
  const getData = async () => {
  let response = await categoryMovies(UPCOMING_API_URL)
  setMovies(response.results)
  console.log(response.results)
  }
  getData()
}, [])

  return (
    <>
    <Component>
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
        >
        {
            movies.map((movie)=>(
                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
            ))
        }
        </Carousel>
        <Contanier>
          <Typography variant='h6' >IMDb Charts</Typography>
          <Typography variant='h4' >IMDb Upcoming Movies</Typography>
          <Typography style={{fontSize:12,margin:5}}>IMDb Top 20 upcoming movies</Typography>
          <Divider/>
          <MoviesList movies={movies}/>
        </Contanier>
    </Component>
    </>
  )
}

export default CategoryUpcoming