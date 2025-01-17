import React from 'react'
import { Grid, Typography, Divider, Box } from '@mui/material'
import { Button, colors } from '../../Theme'
import { Link } from 'react-router-dom'
import { Person2, Groups2, CheckCircle } from '@mui/icons-material'
import { path } from '../../path'
import app from "../../Assets/app.png"

const DownloadApp = () => {
  return (
    <Box sx={{ background: "#f1f1f1", p: { md: "4rem 2rem", xs: "4rem 0.7rem" }, textAlign: "center" }}>
      <Grid container sx={{ justifyContent: "space-around", py: "1rem", maxWidth: { md: "89%", xs: "100%" }, margin: "auto", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "45%", xs: "93%" }, p: "0.6rem" }}>
          <img src={app} width="90%" alt="Join Us" style={{
            borderRadius: "10px",
          }} />
        </Grid>
        <Grid item sx={{ width: { md: "44%", xs: "100%" }, textAlign: "left", p: "10px 20px" }}>
          <Typography sx={{ fontWeight: "600", letterSpacing: "-0.03rem", textTransform: "uppercase" ,fontSize:{md:"40px",xs:"25px"}}}>Download App Now!</Typography>
          <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "16px",maxWidth:"640px" }}>Now Get Latest Savarrior App On your Android Phone with More Features!</Typography>
          <Divider sx={{ width: "80px", height: '4px', my: "0.6rem", background: colors.primary, mb: "1.4rem" }} />
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: "600",marginBottom:2, }}><CheckCircle sx={{ fontSize: {md:"28px",xs:"25px"}, color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> Report and Help Injured Animals Nearby</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: "600",marginBottom:2,  }}><CheckCircle sx={{ fontSize:  {md:"28px",xs:"25px"}, color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> A Well Curated Vegan Library Build In Collaboration with Vegan Voice!</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: "600", }}><CheckCircle sx={{ fontSize:  {md:"28px",xs:"25px"}, color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> Get Information About All Nearby Animal NGOs and Vets</Typography>
          <Link to={path.report} style={{ textDecoration: "none" }}>
            <Button variant='contained' sx={{ mt: "2rem" }}>Get app now!</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DownloadApp