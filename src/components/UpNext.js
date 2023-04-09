import { Typography,styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Component = styled(Box)`
width: 40%;
flex-direction: column;
align-items: baseline;
padding-left: 20px;
&>p{
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
}
`

const Wrapper = styled(Box)`
color: #FFFFFF;
display: flex;
&>p{
    margin-left: 20px;
}
`

const StyledPoster = styled("img")`
width: 88px;
`

const UpNext = ({movies}) => {
  return (
    <Component>
        <Typography>Up Next</Typography>
        {
            movies.splice(0,3).map((movie)=>(
                <Wrapper>
                    <StyledPoster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                    <Typography>{movie.original_title}</Typography>
                </Wrapper>
            ))
        }
    </Component>
  )
}

export default UpNext