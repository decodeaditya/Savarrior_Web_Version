import { styled, Box, Typography, Fab } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { SosRounded } from '@mui/icons-material';
import { path as p } from '../path'

const Footer = () => {

  const path = useLocation()
  const slug = path.pathname

  const Muifab = styled(Fab)((props) => ({
    position: "fixed",
    bottom: "1rem",
    right: "1rem"
  }))

  return (
    <React.Fragment>
      <Box sx={{ display: slug === "/register" || slug === "/login" ? "none" : "block", background: "#f1f1f1", p: "1rem", textAlign: "center", mb: { xs: "3rem", md: "0" } }}>
        <Typography>Footer</Typography>
      </Box>
      <Link to={p.report} style={{textDecoration:"none"}}>
        <Muifab color="error" variant="extended">
          <Typography sx={{ fontWeight: "700" }}>Emergency</Typography>
        </Muifab>
      </Link>
    </React.Fragment>
  )
}


export default Footer