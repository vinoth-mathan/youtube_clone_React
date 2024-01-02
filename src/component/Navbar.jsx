import { Pets } from '@mui/icons-material'
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})
const Search = styled("div")(({theme}) => ({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius:'6px',
  width:'40%'
}))
const Icon = styled(Box)(({theme}) => ({
   display:'none',
   gap:'20px',
   alignItems:'center',
   [theme.breakpoints.up("sm")]:{
    display:'flex'
   }

}))
const UserBox = styled(Box)(({theme}) => ({
   display:'flex',
   gap:'20px',
   alignItems:'center',
   [theme.breakpoints.up("sm")]:{
    display:'none'
   }

}))

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <Box>
     <AppBar position='fixed'>
        <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>Navbar</Typography>
          <Pets sx={{display:{xs:'block', sm:'none'}}}/>
         <Search>Search <InputBase placeholder='Search'></InputBase></Search>
         <Icon>
         <Badge badgeContent={10} color='error'>
            <MailTwoToneIcon color=""/>
          </Badge>
          <Badge badgeContent={10} color='error'>
            <NotificationsNoneTwoToneIcon color="" />
          </Badge>
          <Avatar src='https://picsum.photos/200' onClick={e => setOpen(true)}></Avatar>
          
         </Icon>
         <UserBox onClick={e => setOpen(true)}>
          <Avatar src='https://picsum.photos/200'></Avatar>
          <Typography variant='p'>Beauti</Typography>
         </UserBox>
        </StyledToolbar>
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
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
     </AppBar>

    </Box>
  )
}

export default Navbar