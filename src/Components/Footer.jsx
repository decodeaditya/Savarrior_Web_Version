import { SosRounded } from '@mui/icons-material'
import { styled, Typography, Fab, Grid, Box, Divider, } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path as p } from '../path'
import { Button } from '../Theme'
import logo from './logo.png'

const NavLink = styled(Link)((props) => ({
  color: "#212121",
  fontSize: "16px",
  marginLeft: "7px",
  paddingTop: "3px",
  paddingBottom: "3px",
  padding: "7px",
  textDecoration: "none",
  transition: "all 0.2s ease",
}));


const Footer = () => {

  const path = useLocation()
  const slug = path.pathname


  const Subscribe = styled(Grid)((props) => ({
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    backgroundSize: 'cover',
    textDecoration: 'none',
    background: '#000',
    color: 'white',
    fontSize: '20px',
    minHeight: '200px',
    padding: '20px 2rem',
    position: 'relative',
    margin: '0',
    lineHeight: '1.4',
    zIndex: '1',
    justifyContent: "center",
    ['&::before']: {
      content: '""',
      background: 'url(https://www.torontohumanesociety.com/wp-content/uploads/2021/12/Untitled-design-6.png) center',
      zIndex: '-1',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: '0.4',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      backgroundSize: 'cover'
    }
  }))

  return (

    <React.Fragment>

      <Box sx={{ display: slug === "/register" || slug === "/login" ? "none" : "block", }}>
        <Subscribe container>
          <Grid item sx={{ textAlign: "center" }}><Link> <img src={logo} style={{ width: '150px', background: "#fff", padding: '1rem', paddingTop: "0.5rem", paddingBottom: "0.5rem", borderRadius: 20 }} alt="Savarrior" /></Link></Grid>
          <Grid container sx={{justifyContent:"center",pt:4}}><Grid item><Typography variant="h5" sx={{ fontWeight: "700" }}>Want to Give Feedback for Our Work?</Typography></Grid>
          <Grid item sx={{ ml: { md: "1rem", xs: "0", }, mt: { xs: "1rem", md: 0 } }}><a href='https://api.whatsapp.com/send/?phone=919044558703&text=Hi There! I Had Some FeedBack Regarding Savarrior.' style={{ textDecoration: "none" }} target="_blank"><Button variant="contained">Talk to Us</Button></a></Grid></Grid>
        </Subscribe>
        <Box sx={{ textAlign: "center", py: "10px",px:"10px", background: "#212329e3" }}><Typography sx={{ color: "#fff" }}>Copyright © {new Date().getFullYear()}  - Savarrior || Made with ❤️ by Devcost Tech.</Typography></Box>
      </Box>
    </React.Fragment>
  )
}


export default Footer