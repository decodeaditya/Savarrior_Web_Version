import { Grid, styled, Typography, Box, } from '@mui/material';
import React, { useContext, } from 'react'
import { Button, colors } from '../../Theme';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import hero from "../../Assets/hero.jpg"


const Hero = styled(Box)(({ theme }) => ({
  minHeight: "84vh",
  paddingTop: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundSize: "cover",
  background: '#0009',
  [theme.breakpoints.down('md')]: {
    minHeight: "80vh",
  },
  '&::before': {
    content: '""',
    background: `url(${hero}) center`,
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.6,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }
}));

const HeroSection = () => {

  const { CurrentUser } = useContext(AuthContext)
  const [success, setSuccess] = React.useState(false)

  return (
    <Hero>
      <Grid container sx={{ maxWidth: { md: "89%", xs: "99%" }, justifyContent: "space-between", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "60%", xs: "100%" }, p: "1rem", alignItems: "center", justifyContent: "center", my: { md: 0, xs: 8 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "600", fontSize: { md: "60px", xs: "38px" }, textTransform: "capitalize" }}>LET'S BE THE <span sx={{ color: colors.primary }}>CHANGE</span>!</Typography>
          <Typography variant="body1" sx={{ maxWidth: "640px", color: '#f2f2f2', mt: '1rem', fontSize: { md: "20px", xs: "19px" }, fontWeight: "500" }}>Together, we can create a better world for animals. So Join the movement, be a hero for animals in need!</Typography>
          <Link to="/register" style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "1.5rem", marginLeft: "0" }}>Join to Create Impact !</Button></Link>
        </Grid>
      </Grid>
    </Hero>
  )
}

export default HeroSection