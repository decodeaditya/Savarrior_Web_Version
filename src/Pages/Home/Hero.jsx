import { Grid, styled, Typography, Box, Stack, TextField } from '@mui/material';
import React from 'react'
import { Button } from '../../Theme';


const Hero = styled(Box)((props) => ({
  minHeight: "86vh",
  marginTop: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position:"relative",
  background: 'url(https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80) center',
  backgroundSize: "cover",
}));

const HeroSection = () => {
  return (
    <Hero>
      <Grid container sx={{ maxWidth: {md:"89%",xs:"99%"},justifyContent:"space-between",alignItems:"center" }}>
        <Grid item sx={{ width: {md:"50%",xs:"100%"}, p: "1rem", alignItems: "center", justifyContent: "center",my:{md:0,xs:8} }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "700",fontSize:{md:"50px",xs:"33px"} }}>Let's Help Each & Every Creature of God</Typography>
          <Typography variant="body1" sx={{ color: '#f2f2f2', mt: '1rem', fontSize: {md:"19px",xs:"17px"}, fontWeight: "600" }}>Enter your lost pet's information into the form above to start spreading awareness. We will create a lost pet flyer and post it to your city's Lost & Found Pet Facebook page to start reaching users in your area.</Typography>
          <Button variant="contained" sx={{ mt: "1.5rem" }}>Join to Create Impact !</Button>
        </Grid>
        <Grid item sx={{ background: "#ffffffd4", width: {md:"40%",xs:"100%"}, p: '1.5rem', borderRadius: "7px",mx:{md:0,xs:2},mb:{md:0,xs:8} }}>
        <Typography variant="h5" sx={{ color: '#212121', fontWeight: "600" }}>Report A Rescue Near You!</Typography>
        <Typography variant="body1" sx={{ color: '#212121', fontWeight: "500",my:"1rem" }}>Enter your pet's information to instantly start spreading local awareness.</Typography>
          <Stack>
            <TextField label="Location" sx={{ my: 1 }} />
            <TextField label="Phone" sx={{ my: 1 }} />
            <TextField label="Priority" sx={{ my: 1 }} />
          </Stack>
          <Button variant='contained' sx={{borderRadius:"3px",width:"100%",mt:'1rem'}} >Submit Details</Button>
        </Grid>
      </Grid>
    </Hero>
  )
}

export default HeroSection