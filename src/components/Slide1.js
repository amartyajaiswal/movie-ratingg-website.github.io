import React from 'react'

import { Box,styled } from '@mui/system';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const StyledBanner = styled("img")`
width: 100%;
margin-top: 20px;
`
const StyledBox = styled(Box)`
margin-top: 20px;
`
const Title = styled(Typography)`
color:#FFFFFF;
text-align: center
`
const TitleHeading = styled(Typography)`
color: #f5c518;
font-weight: 600;
font-size: 30px;
`



const Slide1 = ({movies}) => {
  return (
        <StyledBox>
        <TitleHeading>Title</TitleHeading>
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
                <>
                <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                <Title>{movie.original_title}</Title>
                </>
            ))
        }
        </Carousel>
        </StyledBox>
    
  )
}

export default Slide1