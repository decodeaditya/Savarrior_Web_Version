import { Grid, styled, Typography, Box, Stack, TextField, InputAdornment, IconButton } from '@mui/material';
import React from 'react'
import { Button } from '../../Theme';
import { signInAnonymously, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import { ShareLocationRounded } from '@mui/icons-material';
import Geocode from "react-geocode";


const Hero = styled(Box)((props) => ({
  minHeight: "86vh",
  marginTop: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: 'url(https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80) center',
  backgroundSize: "cover",
}));

const HeroSection = () => {


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
      const name =  data.get("name")
      const phone = data.get("phone")
      const location =  data.get("location")

    const res = await signInAnonymously(auth)

    updateProfile(res.user,{
      displayName:name,
      phoneNumber:phone
    })
  }

  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const getLocation = ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          (response) => {
            const address = response.results[0].formatted_address;
            console.log(address);
          },
          (error) => {
            console.error(error);
          }
        );
      });
    } else {
      console.log("S")
    }
  }

  return (
    <Hero>
      <Grid container sx={{ maxWidth: { md: "89%", xs: "99%" }, justifyContent: "space-between", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "50%", xs: "100%" }, p: "1rem", alignItems: "center", justifyContent: "center", my: { md: 0, xs: 8 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "700", fontSize: { md: "50px", xs: "33px" } }}>Let's Help Each & Every Creature of God</Typography>
          <Typography variant="body1" sx={{ color: '#f2f2f2', mt: '1rem', fontSize: { md: "19px", xs: "17px" }, fontWeight: "600" }}>Enter your lost pet's information into the form above to start spreading awareness. We will create a lost pet flyer and post it to your city's Lost & Found Pet Facebook page to start reaching users in your area.</Typography>
          <Button variant="contained" sx={{ mt: "1.5rem" }}>Join to Create Impact !</Button>
        </Grid>
        <Grid item sx={{ background: "#ffffffd4", width: { md: "40%", xs: "100%" }, p: '1.5rem', borderRadius: "7px", mx: { md: 0, xs: 2 }, mb: { md: 0, xs: 8 } }} component="form" noValidate onSubmit={handleSubmit} >
          <Typography variant="h5" sx={{ color: '#212121', fontWeight: "600" }}>Report A Rescue Near You!</Typography>
          <Typography variant="body1" sx={{ color: '#212121', fontWeight: "500", my: "1rem" }}>Enter your pet's information to instantly start spreading local awareness.</Typography>
          <Stack>
            <TextField label="Name" sx={{ my: 1 }} name="name" id="name" />
            <TextField label="Phone" sx={{ my: 1 }} name="phone" id="phone" />
            <TextField label="Location" sx={{ my: 1 }} name="location" id="location"  InputProps={{
            endAdornment: <InputAdornment position="end"><IconButton onClick={getLocation}><ShareLocationRounded/></IconButton></InputAdornment>,
          }}/>
            <Box sx={{ display: "flex", alignItems: "center", my: "8px", p: "12px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Animal's Image :&nbsp; </Typography> <input type="file" id="avatar" accept='image/*' /></Box>
          </Stack>
          <Button variant='contained' sx={{ borderRadius: "3px", width: "100%", mt: '1rem' }} type="submit">Submit Details</Button>
        </Grid>
      </Grid>
    </Hero>
  )
}

export default HeroSection