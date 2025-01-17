import { styled, Typography, Grid, Box, Zoom, } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import whatsapp from "../Assets/whatsapp.png"
import mail from "../Assets/mail.png"
import linkedin from "../Assets/linkedin.png"
import call from "../Assets/phone.png"
import backBtn from "../Assets/TopBtn.png"
import { path as way } from '../path'


const Footer = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const path = useLocation()
  const slug = path.pathname

  const Subscribe = styled(Grid)((props) => ({
    alignItems: 'center',
    flexDirection: "column",
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
      background: `#5cb1a9`,
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

  const TopBtn = styled(Box)((props) => ({
    width: '75px',
    height: '75px',
    textAlign: 'center',
    borderRadius: '50%',
    color: '#fff',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '999',
    border: 'none',
    cursor: 'pointer',
  }))


  return (

    <>
      <Box sx={{ display: slug === "/register" || slug === "/register/" ? "none" : "block", }}>
        <Subscribe container>
          <Link to={way.about} style={{ color: "#fff" }}>  <Typography sx={{ py: "20px", fontWeight: "700", color: "white" }}>KNOW ABOUT US!</Typography></Link>
          <Grid container sx={{ justifyContent: "center", background: "#fff", padding: "1rem", width: "fit-content", borderRadius: 40, alignItems: "center", textAlign: "center" }}>
            <Grid item ><a href='https://api.whatsapp.com/send/?phone=919044558703&text=Hi There! I Had Some FeedBack Regarding Savarrior.' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={whatsapp} /></a></Grid>
            <Grid item sx={{ ml: "1rem", }}><a href='https://www.linkedin.com/in/aditya-kumar-0a0688245/' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={linkedin} /></a></Grid>
            <Grid item sx={{ ml: "1rem", }}><a href='mailto:adityaj02810@gmail.com' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={mail} /></a></Grid>
            <Grid item sx={{ ml: "1rem", }}><a href='tel:+919044558703' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={call} /></a></Grid>
          </Grid>
        </Subscribe>
        <Box sx={{ textAlign: "center", py: "10px", px: "10px", background: "rgb(16 38 36)" }}><Typography sx={{ color: "#fff" }}>© {new Date().getFullYear()}  - Made with ❤️ by Savarrior </Typography></Box>
      </Box>
      <Zoom in={visible} onClick={scrollToTop}>
        <TopBtn><img src={backBtn} width={'100%'} style={{
          '-webkit-tap-highlight-color': 'transparent',
          '- webkit - touch - callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
        }}/>
        </TopBtn>
      </Zoom>
    </>
  )
}


export default Footer