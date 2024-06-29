import { SosRounded } from '@mui/icons-material'
import { styled, Typography, Fab, Grid, Box, Divider, } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path as p } from '../path'
import { Button } from '../Theme'
import logo from './logo.png'
import whatsapp from "../Assets/whatsapp.png"
import mail from "../Assets/mail.png"
import linkedin from "../Assets/linkedin.png"
import call from "../Assets/phone.png"
import footimg from "../Assets/footer.png"

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
      background: `url(${footimg}) center`,
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
          <Grid container sx={{justifyContent:"center",background:"#fff",padding:"1rem",width:"fit-content",borderRadius:40,alignItems:"center",textAlign:"center"}}>
          <Grid item ><a href='https://api.whatsapp.com/send/?phone=919044558703&text=Hi There! I Had Some FeedBack Regarding Savarrior.' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={whatsapp}/></a></Grid>
          <Grid item sx={{ ml:"1rem",}}><a href='https://www.linkedin.com/in/aditya-kumar-0a0688245/' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={linkedin}/></a></Grid>
          <Grid item sx={{ ml:"1rem",}}><a href='mailto:adityaj02810@gmail.com' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={mail}/></a></Grid>
          <Grid item sx={{ ml:"1rem",}}><a href='tel:+919044558703' style={{ textDecoration: "none" }} target="_blank"><img width={"50px"} src={call}/></a></Grid>
          </Grid>
        </Subscribe>
        <Box sx={{ textAlign: "center", py: "10px",px:"10px", background: "#212329e3" }}><Typography sx={{ color: "#fff" }}>Copyright © {new Date().getFullYear()}  - Savarrior || Made with ❤️ by <a style={{color:"#fff"}} target="_blank" href='https://devcosttech.netlify.app/'>Devcost Tech.</a></Typography></Box>
      </Box>
    </React.Fragment>
  )
}


export default Footer