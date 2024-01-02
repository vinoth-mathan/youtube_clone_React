import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const Sidebar = ({mode,setMode}) => {
  return ( 
    <Box  flex={1} p={2} sx={{display:{ xs:'none',sm:'block'}}}>
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home Pages" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <ArticleRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Market Places" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <SettingsIcon  />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
        <ListItemButton component="a" href='#'>
        <ListItemIcon>
          <ModeNightIcon />
        </ListItemIcon>
        <Switch defaultChecked onChange={(e) => setMode(mode === "dark" ? "light" : "dark")} />
      </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar