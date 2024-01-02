import styled from '@emotion/styled'
import { Add } from '@mui/icons-material'
import {  Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PhotoIcon from '@mui/icons-material/Photo';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StyledModel = styled(Modal)({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'15px',
  marginBottom:'10px'
})

const Addd = () => {
  const [open, setOpen] =useState(false);
  
  return (
  <>
  <Tooltip title="Add New" sx={{position:'fixed',bottom:20,left:{xs:'calc(50% - 25px)',md:30}}} onClick={e => setOpen(true)}>
  <IconButton>
  <Fab color="primary" aria-label="add">
  <Add />
</Fab>
  </IconButton>
</Tooltip>
<StyledModel
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={420} height={300} p={3}  borderRadius={5}
        bgcolor={"background.default"} color={"text.primary"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
           Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{width:30 ,height:30,backgroundColor:'red'}}>
        
            </Avatar>
            <Typography variant='span' fontWeight={600} color={'green'}>Vinoth</Typography>
          </UserBox>
          <TextField sx={{width:'100%'}}
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="What's on Your Mind ?"
          variant='standard'
        />
         <Stack  direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary'/>
            <PhotoIcon color='secondary'/>
            <AddAPhotoIcon color='success'/>
            <PersonAddAlt1Icon color='error'/>
         </Stack>
         <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{width:'100%'}}>
          <Button sx={{width:'80%'}}>Post</Button>
          <Button sx={{width:'20%'}}>
         <CalendarMonthIcon/>
          </Button>
          
        </ButtonGroup>
        </Box>
 </StyledModel>
  
  </>
   
  )
}

export default Addd
