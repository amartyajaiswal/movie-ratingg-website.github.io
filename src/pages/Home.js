import React, { useEffect,useState } from 'react'

import { Box,styled } from '@mui/system'

import Header from '../components/Common/Header'
import Banner from '../components/Banner'
import UpNext from '../components/UpNext'
import Slide1 from '../components/Slide1'
import Slide2 from '../components/Slide2'
import Slide3 from '../components/Slide3'
import Slide4 from '../components/Slide4'
import Slide5 from '../components/Slide5'
import Slide6 from '../components/Slide6'
import Footer from '../components/Common/Footer'

import { categoryMovies } from '../services/api'
import { NOWPLAYING_API_URL } from '../constants/constants'
import { TOPPEOPLE_API_URL } from '../constants/constants'

const Wrapper = styled(Box)`
display: flex;
padding: 20px 0;
`

const Component = styled(Box)`
padding: 0 115px;
`

const Home = () => {

  const[movies,setMovies]=useState([])
  const [people, setPeople] = useState([])

  useEffect(  () => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL)
      setMovies(response.results)
      console.log(response.results)
    }
    getData()
    const getData1 = async () => {
      let response = await categoryMovies(TOPPEOPLE_API_URL)
      setPeople(response.results)
      console.log(response.results)
    }
    getData1()
  }, [])
  

  return (
    <>
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide1 movies={movies} />
        <Slide6 people={people} />
        <Slide2 movies={movies} />
        <Slide3 movies={movies} />
        <Slide4 movies={movies} />
        <Slide5 movies={movies} />
      </Component>
    </>
  )
}

export default Home