import React from 'react'
import { Grid, Typography, Divider, Box } from '@mui/material'
import { Button, colors } from '../../Theme'
import { Link } from 'react-router-dom'
import { Person2, Groups2 } from '@mui/icons-material'
import { path } from '../../path'
import alone from "../../Assets/aloneIcon.png"
import ngoicon from "../../Assets/ngoIcon.png"
import joinimage from "../../Assets/join.jpg"

const Join = () => {
  return (
    <Box sx={{ background: "#f1f1f1", p: { md: "4rem 2rem", xs: "4rem 0.7rem" }, textAlign: "center" }}>
      <Grid container sx={{ justifyContent: "space-around", py: "1rem", maxWidth: { md: "89%", xs: "100%" }, margin: "auto", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "50%", xs: "100%" }, p: "0.6rem" }}>
          <img src={joinimage} width="100%" alt="Join Us" style={{
            borderRadius: "10px",
          }} />
        </Grid>
        <Grid item sx={{ width: { md: "44%", xs: "100%" }, textAlign: "left", p: "10px 20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "600", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>We Need More Heros!</Typography>
          <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Small acts of kindness and help can add up to make a big impact</Typography>
          <Divider sx={{ width: "80px", height: '4px', my: "0.6rem", background: colors.primary, mb: "1.4rem" }} />

          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "600" }}><img style={{ width: "40px", padding: "8px", marginRight: "8px",  }} src={alone} /> If you're an INDIVIDUAL with a desire to help animals, We need you!</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "600", mt: "18px" }}><img style={{ width: "40px", padding: "8px", marginRight: "8px", }} src={ngoicon}/>  If you're an ORGANIZATION with a desire to help animals, We need you!</Typography>
          <Link to={path.register} style={{ textDecoration: "none" }}>
            <Button variant='contained' sx={{ mt: "2rem" }}>Join Now!</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Join