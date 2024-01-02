
import { Box } from '@mui/material'
import React from 'react'
import Post from '../component/Post'
import Poster from './Poster'
import Post2 from './Post2'
import Post3 from './Post3'
import Post4 from './Post4'

const Feed = () => {
 return(
   <Box flex={4} p={2} >
      <Post />
      <br/>
      <Poster />
      <br/>
      <Post2/>
      <br/>
      <Post3/>
      <br/>
      <Post4/>
   </Box>
 )
}

export default Feed