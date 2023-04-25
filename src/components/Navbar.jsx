
import { styled } from "@mui/material/styles"

import { DirectionsCar, Mail, Notifications } from '@mui/icons-material'

import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "15px",
  width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}> CHEVY DEV</Typography>
        <DirectionsCar sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={e => setOpen(true)}
            sx={{ width: 23, height: 23 }}
            src='https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg' />
        </Icons>

        {/* Mobile View */}
        <UserBox >
          <Avatar
            onClick={e => setOpen(true)}
            sx={{ width: 23, height: 23 }}
            src='https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg'
          />
          <Typography >John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={e => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={e => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={e => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

