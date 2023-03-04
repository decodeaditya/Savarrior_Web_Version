import React from 'react'
import { Grid, Typography, Divider, Box } from '@mui/material'
import { Button, colors, SquareButton } from '../../Theme'
import Joinimg from '../../Assets/Join.jpg'
import { Person2,Groups2 } from '@mui/icons-material'

const Join = () => {
  return (
    <Box sx={{ background: "#f1f1f1", p: "4rem 2rem", textAlign: "center" }}>
      <Grid container sx={{ justifyContent: "space-between", py: "1rem", maxWidth: "89%", margin: "auto", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "50%", xs: "100%" }, p: "0.6rem" }}>
          <img src="https://img.freepik.com/premium-photo/brown-stray-dog-with-poor-thin-body-eats-yogurt-from-hands-people-walking-along-street-park-dog-s-nose-yogurt_348487-887.jpg?w=2000" width="100%" alt="Join Us" style={{
            borderRadius: "5px",
          }} />
        </Grid>
        <Grid item sx={{ width: { md: "50%", xs: "100%" }, textAlign: "left", p: "10px 20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "700", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>We Need More Heros!</Typography>
          <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Small acts of kindness and help can add up to <br/> make a big impact :)

          </Typography>
          <Divider sx={{ width: "80px", height: '4px', my: "0.6rem", background: colors.primary, mb: "1.4rem" }} />
          {/* <Typography sx={{mb:"15px",fontSize:"18px",fontWeight:"600"}}>
          All terms refer to the offer, acceptance and consideration of payment necessary to undertake the 
          process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, 
          in accordance with and subject to, prevailing law of Netherlands.
          </Typography> */}
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "600" }}><Person2 sx={{ fontSize: "30px", background: colors.primary, color: "#fff", p: "8px", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> If you're an INDIVIDUAL with a desire <br/>to help animals, We need you!</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "20px", fontWeight: "600", mt: "14px" }}><Groups2 sx={{ fontSize: "30px", background: colors.primary, color: "#fff", p: "8px", mr: "8px", borderRadius: "50%", border: `2px solid #167068` }} /> If you're an ORGANIZATION with a<br/> desire to help animals, We need you!</Typography>
          {/* <Typography sx={{display:"flex",alignItems:"center",fontSize:"18px",fontWeight:"600"}}><CheckCircle sx={{color:"green",mr:"8px"}}/> Create Impact With the Skills You Know</Typography> */}
          <SquareButton variant='contained' sx={{ mt: "2rem" }}>Join Now !</SquareButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Join