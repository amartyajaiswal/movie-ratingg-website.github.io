import React from 'react'
import { Menu,MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderMenu = ({open,handleClose}) => {
const openMenu=Boolean(open)

  return (
    <>
    <Menu
        id="basic-menu"
        anchorEl={open} // This props tells the component where to open the Menu
        open={openMenu} // This is modified from the original syntax of menu component of material UI
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/categoryPopular' style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        
        <Link to='/categoryTopRated' style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        
        <Link to='/categoryUpcoming' style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
        </Link>
        
      </Menu>
    </>
  )
}

export default HeaderMenu