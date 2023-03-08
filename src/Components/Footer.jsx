import { HomeRounded, HomeWorkRounded, PetsRounded, SosRounded } from '@mui/icons-material'
import { BottomNavigation, styled, BottomNavigationAction as MuiBottomNavigationAction, Paper, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Theme, colors } from '../Theme';

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  &.Mui-selected {
    color: ${colors.primary};
  }
`);


const Footer = () => {


  const [value, setValue] = useState("Home")

  const path = useLocation()
  const slug = path.pathname

  return (
    <React.Fragment>
      <Box sx={{marginTop:"3rem", display: slug === "/register" || slug === "/login" ? "none" : "block", background: "#f1f1f1", p: "1rem", textAlign: "center", mb: { xs: "3rem", md: "0" } }}>
        <Typography>Footer</Typography>
      </Box>
      <Paper sx={{ px: "10px", position: 'fixed', bottom: 0, left: 0, right: 0, display: { xs: "block", md: "none" } }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          selected={{ color: "red" }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRounded />} sx={{ fontWeight: "600", minWidth: "70px" }} />
          <BottomNavigationAction label="Rescues" icon={<PetsRounded />} sx={{ fontWeight: "600", minWidth: "70px" }} />
          <BottomNavigationAction label="Emergency" icon={<SosRounded />} sx={{ fontWeight: "600", background: "#f1f1f1", minWidth: "70px" }} />
          <BottomNavigationAction label="NGOs" icon={<HomeWorkRounded />} sx={{ fontWeight: "600", minWidth: "70px" }} />
          <BottomNavigationAction label="Account" icon={<SosRounded />} />
        </BottomNavigation>
      </Paper>
    </React.Fragment>
  )
}


export default Footer