import React from 'react'
import { Grid, Typography, Divider, Box } from '@mui/material'
import { SquareButton, colors } from '../Theme'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import appimage from "./DownloadApp.png"

const AppPage = () => {
  return (
    <Box sx={{ background: "#f1f1f1", p: { md: "4rem 2rem", xs: "4rem 0.7rem" }, textAlign: "center",marginTop:{md:"2rem",xs:"1rem"} }}>
      <Grid container sx={{ justifyContent: "space-around", py: "1rem", maxWidth: { md: "89%", xs: "100%" }, margin: "auto", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "45%", xs: "93%" }, p: "0.6rem" }}>
          <img src={appimage} width="100%" alt="Join Us" style={{
            borderRadius: "10px",
          }} />
        </Grid>
        <Grid item sx={{ width: { md: "44%", xs: "100%" }, textAlign: "left", p: "10px 20px" }}>
          <Typography sx={{ fontWeight: "700", letterSpacing: "-0.04rem", textTransform: "uppercase",fontSize:{md:"40px",xs:"30px"} }}>Download Android App Now!</Typography>
          <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Now Get Latest Savarrior App On your Android Phone with More Features!</Typography>
          <Divider sx={{ width: "80px", height: '4px', my: "0.6rem", background: colors.primary, mb: "1.4rem" }} />
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "18px", fontWeight: "600",marginBottom:2 }}><CheckCircle sx={{ fontSize: "28px", color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> Report and Help Injured Animals Nearby</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "18px", fontWeight: "600",marginBottom:2  }}><CheckCircle sx={{ fontSize: "28px", color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> A Well Curated Vegan Library Build In Collaboration with Vegan Voice!</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "18px", fontWeight: "600" }}><CheckCircle sx={{ fontSize: "28px", color: colors.primary, background: "#f6f6f6", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> Get Information About All Nearby Animal NGOs and Vets</Typography>
          <Link to="https://drive.google.com/file/d/1D_ZptriYgZZyxruLAgxW_hMQ4RANq7if/view?usp=sharing" target="_blank" style={{ textDecoration: "none" }}>
          <SquareButton   fullWidth variant='contained' sx={{ mt: "2rem",padding:"0.7rem" }}>Download It!</SquareButton>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AppPage