import { Grid, styled, Typography, Box, Stack, TextField, InputAdornment, IconButton } from '@mui/material';
import React from 'react'
import { Button } from '../../Theme';
import { signInAnonymously, updateProfile } from "firebase/auth";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../../firebase';
import { ShareLocationRounded } from '@mui/icons-material';
import { v4 as uuid } from 'uuid'


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
  const [countryCode, setCode] = React.useState("+91")
  const [location, setLocation] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get("name")
    const phone = data.get("phone")
    const locate = location
    const PhoneNumber = countryCode + " " + phone
    const file = data.get("img")

    const res = await signInAnonymously(auth)

    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (error) => {
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log(downloadURL)
          await updateProfile(res.user, {
            displayName: name
          })

          await updateDoc(doc(db, "reportedRescues", "reportedRescues"), {
            rescues: arrayUnion({
              id: uuid(),
              name: name,
              location: locate,
              phone: PhoneNumber,
              img:downloadURL
            })
          })
        });
      }
    );

  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=cd4204a0296b4fccabfbeaaa86f29d9e`).then(res => res.json()).then(res => setLocation(res.results[0].formatted))
      });
    } else {
      window.alert("Sorry")
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
        <Grid item sx={{ background: "#ffffffd4", width: { md: "40%", xs: "97%" }, p: { md: '1.5rem', xs: "1.3rem 0.9rem" }, borderRadius: "7px", mb: { md: 0, xs: 8 }, margin: "auto" }} component="form" noValidate onSubmit={handleSubmit} >
          <Typography variant="h5" sx={{ color: '#212121', fontWeight: "600" }}>Report A Rescue Near You!</Typography>
          <Typography variant="body1" sx={{ color: '#212121', fontWeight: "500", my: "1rem" }}>Enter your pet's information to instantly start spreading local awareness.</Typography>
          <Stack>
            <TextField label="Name" sx={{ my: 1 }} name="name" id="name" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField sx={{ my: 1, mr: 1, width: "20%" }} name="code" id="code" value={countryCode} onChange={(e) => setCode(e.target.value)} />
              <TextField label="Phone" sx={{ my: 1, width: "80%" }} name="phone" id="phone" />
            </Box>
            <TextField label="Location" sx={{ my: 1 }} name="location" id="location" value={location} onChange={(e) => setLocation(e.target.nodeValue)} InputProps={{
              endAdornment: <InputAdornment position="end"><IconButton onClick={getLocation}><ShareLocationRounded /></IconButton></InputAdornment>,
            }} />
            <Box sx={{ display: "flex", alignItems: "center", my: "8px", p: "12px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Animal's Image :&nbsp; </Typography> <input type="file" id="animal" accept='image/*' name="img"/></Box>
          </Stack>
          <Button variant='contained' sx={{ borderRadius: "3px", mt: '1rem', marginLeft: "0", }} type="submit" >Submit Details</Button>
        </Grid>
      </Grid>
    </Hero>
  )
}

export default HeroSection