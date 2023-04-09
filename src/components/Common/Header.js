import React from 'react'
import { AppBar,Toolbar,styled, Typography, InputBase } from '@mui/material'
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';
import { Box } from '@mui/system';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';
import { logoURL } from '../../constants/constants';
import { useNavigate } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)`
    background: #121212;
    padding: 0 115px !important;
    justify-content: space-between;
    &>div{
        display: flex;
        align-items: center;
        cursor: pointer;
        &>p{
            font-size: 14px;
            font-weight: 600;
        }
    }
    &>p{
            font-size: 14px;
            font-weight: 600;
    }
`
const StyledInputBase = styled(InputBase)`
    background: #FFFFFF;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const StyledLogo = styled('img')({
    width:64,
    cursor:'pointer'
})

const Header = () => {

let navigate = useNavigate()

let handleImageClick = () => {
    navigate('/')
}


const [open, setOpen] = useState(null)

const handleClick = (e) => {
    setOpen(e.currentTarget)
}

const handleClose = (e) => {
    setOpen(null)
}

  return (
    <AppBar position='static' >
        <StyledToolBar>
            <StyledLogo src={logoURL} alt='logo' onClick={handleImageClick}/>
            <Box onClick={handleClick} >
                <Menu/>    
                <Typography>Menu</Typography>
            </Box>
            <HeaderMenu open={open} handleClose={handleClose} />
            <StyledInputBase/>
            <Typography>IMDb<Box component="span">pro</Box></Typography>
            <Box>
                <BookmarkAdd/>
                <Typography>Watchlist</Typography>
            </Box>
            <Typography>Sign In</Typography>
            <Box>
                <Typography>EN</Typography>
                <ExpandMore/>
            </Box>
        </StyledToolBar>
    </AppBar>
  )
}

export default Header