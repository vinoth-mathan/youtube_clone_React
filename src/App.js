import { Box,Stack, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Feed from './component/Feed'
import Rightbar from './component/Rightbar'
import Addd from './component/Addd'


const App = () => {
const [mode,setMode]=useState("dark")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/>
     <Stack direction="row" className='mainconponent' spacing={2} justifyContent="space-between">  
        <Sidebar mode={mode} setMode={setMode}/>
        <Feed/>
        <Rightbar/>
     </Stack>
     <Addd/>
   </Box>

    </ThemeProvider> 
 
  )
}

export default App