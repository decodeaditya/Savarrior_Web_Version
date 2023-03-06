import { HomeRounded, HomeWorkRounded, PetsRounded, SosRounded } from '@mui/icons-material'
import { BottomNavigation,styled, BottomNavigationAction as MuiBottomNavigationAction,Paper } from '@mui/material'
import React, { useState } from 'react'
import { Theme,colors } from '../Theme';

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  &.Mui-selected {
    color: ${colors.primary};
  }
`);


const Footer = () => {


  const [value,setValue] = useState("Home")

  return (
    <>
      <Paper sx={{ px:"10px",position: 'fixed', bottom: 0, left: 0, right: 0,display:{xs:"block",md:"none"} }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          selected={{color:"red"}}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home"  icon={<HomeRounded/>} sx={{fontWeight:"600",minWidth:"70px"}} />
          <BottomNavigationAction label="Rescues" icon={<PetsRounded/>} sx={{fontWeight:"600",minWidth:"70px"}}/>
          <BottomNavigationAction label="Emergency"  icon={<SosRounded/>} sx={{fontWeight:"600",background:"#f1f1f1",minWidth:"70px"}}/>
          <BottomNavigationAction label="NGOs"  icon={<HomeWorkRounded/>} sx={{fontWeight:"600",minWidth:"70px"}}/>
          <BottomNavigationAction label="Account"  icon={<SosRounded/>}/>
        </BottomNavigation>
      </Paper>
    </>
  )
}


export default Footer