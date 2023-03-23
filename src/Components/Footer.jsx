import { styled, Typography, Fab, Grid } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path as p } from '../path'
import { Button } from '../Theme'

const Footer = () => {

  const path = useLocation()
  const slug = path.pathname

  const Muifab = styled(Fab)((props) => ({
    position: "fixed",
    bottom: "1rem",
    right: "1rem"
  }))

  const Subscribe = styled(Grid)((props) => ({
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    backgroundSize: 'cover',
    textDecoration: 'none',
    background: '#000',
    color: 'white',
    fontSize: '20px',
    minHeight: '150px',
    padding: '20px 2rem',
    position: 'relative',
    margin: '0',
    lineHeight: '1.4',
    zIndex: '1',
    justifyContent: "center",
    ['&::before']: {
      content: '""',
      background: 'url(https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg?crop=1.00xw:0.669xh;0,0.158xh&resize=1200:*)',
      zIndex: '-1',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: '0.6',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      backgroundSize: 'cover'
    }
  }))

  return (

    <React.Fragment>


      <Subscribe container sx={{ display: slug === "/register" || slug === "/login" ? "none" : "flex", }}>
        <Grid item ><Typography variant="h5" sx={{ fontWeight: "700" }}>Subscribe to Savarrior to Receive Latest Rescue Information!</Typography></Grid>
        <Grid item sx={{ ml: { md: "1rem", xs: "0", }, mt: { xs: "1rem", md: 0 } }}><Button variant="contained">Subscribe it Now</Button></Grid>
      </Subscribe>
      <Grid container  sx={{background:"gray",p:"2rem",color:"#fff",justifyContent:"center"}}>
      <Typography variant="h4" sx={{fontWeight:"700"}}>FOOTER</Typography>
      </Grid>

      <Link to={p.report} style={{ textDecoration: "none" }}>
        <Muifab color="error" variant="extended">
          <Typography sx={{ fontWeight: "700" }}>Emergency</Typography>
        </Muifab>
      </Link>
    </React.Fragment>
  )
}


export default Footer