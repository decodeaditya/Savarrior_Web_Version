import { Grid, styled, Typography, Box, keyframes, } from '@mui/material';
import React, { useContext, } from 'react'
import { Button, } from '../../Theme';
import { Link } from 'react-router-dom';
import hero from "../../Assets/hero.jpg"

var scroll = keyframes`
     from { background-position: 0%; }
  to { background-position: 90000%; }
`;
const Hero = styled(Box)(({ theme }) => ({
  minHeight: "86vh",
  paddingTop: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.7) 100%)',
  '&::before': {
    content: '""',
    background: `url(${hero})`,
    backgroundAttachment: 'fixed',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.7,
    backgroundRepeat: 'repeat-x',
    animation: `${scroll} 500s linear infinite`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    '&::before': {
      animation: `${scroll} 13000s linear infinite`,
    },
    minHeight: "81vh",
  },
}));

const HeroSection = () => {

  return (
    <Hero>
      <Grid container sx={{ maxWidth: { md: "89%", xs: "99%" }, justifyContent: "space-between", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "60%", xs: "100%" }, p: "1rem", alignItems: "center", justifyContent: "center", my: { md: 0, xs: 8 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "800", fontSize: { md: "4em", xs: "2.3em" }, textTransform: "capitalize" }}>BE THE VOICE FOR <span style={{ color: '#5cb1a9' }}>VOICELESS!</span></Typography>
          <Typography variant="body1" sx={{ maxWidth: "640px", color: '#f2f2f2', mt: '1rem', fontSize: { md: "20px", xs: "19px" }, fontWeight: "500" }}>Together, we can create a better world for animals. So Join the movement, be a hero for animals in need!</Typography>
          <Link to="/register" style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "1.5rem", marginLeft: "0" }}>Join to Create Impact !</Button></Link>
        </Grid>
      </Grid>
    </Hero>
  )
}

export default HeroSection