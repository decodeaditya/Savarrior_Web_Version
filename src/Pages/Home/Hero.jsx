import { Grid, styled, Typography, Box, Stack, TextField, InputAdornment, IconButton, Modal, Card } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../Theme';
import { signInAnonymously, updateProfile } from "firebase/auth";
import { arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../../firebase';
import { Close, ShareLocationRounded } from '@mui/icons-material';
import { v4 as uuid } from 'uuid'
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { locationOptions, path } from '../../path';
import { MessageContext } from '../../Context/MessageContext';

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


  const { CurrentUser } = useContext(AuthContext)
  const [countryCode, setCode] = React.useState("+91")
  const [location, setLocation] = React.useState("")
  const [latitude, setLatitude] = React.useState("")
  const [longitude, setLongitude] = React.useState("")
  const [success, setSuccess] = React.useState(false)


  const [username, setName] = React.useState(CurrentUser?.displayName)
  const [phone, setPhone] = React.useState(CurrentUser?.phoneNumber?.slice(3))
  const { sendMsg } = useContext(MessageContext)


  const handleSubmit = async (e) => {

    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = username
    const phone = data.get("phone")
    const locate = location
    const PhoneNumber = countryCode + " " + phone
    const file = data.get("img")
    const uuidId = uuid()

    const res = !CurrentUser ? await signInAnonymously(auth) : CurrentUser

    const storageRef = ref(storage, name + uuidId);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => { },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

          !CurrentUser && updateProfile(res.user, { displayName: name })

          const date = new Date().toLocaleDateString()

          await updateDoc(doc(db, "reportedRescues", "reportedRescues"), {
            rescues: arrayUnion({
              id: uuidId,
              name: name,
              location: [{ address: locate }, { coords: [{ latitude: latitude }, { longitude: longitude }] }],
              phone: PhoneNumber,
              img: downloadURL,
              userId: res.uid,
              timestamp: date
            })
          })

          setSuccess(true)
          sendMsg({
            heading: `New Rescue Added by ${name}`,
            img: downloadURL,
            subtitle: `Dear Animal Lover, A New Rescue Has been Located at ${location}`
          })


        });
      })
  }

  const fetchAddress = async (latitude, longitude) => {
    const response = await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`, locationOptions)
    const locate = await response.json()
    return locate
  }

  const [getLocation,setGetLocation] = useState(false)

  useEffect(() => {
    const getLocation = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {

          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)

          await fetchAddress(latitude, longitude).then(res => {
            setLocation(res.results[0].address)
          })

          setGetLocation(false)

        });
      } else {
        window.alert("Sorry, Your Browser is Not Compatible for Auto Locating")
      }
    }

    return getLocation()
  },[getLocation])


  return (
    <Hero>

      <Grid container sx={{ maxWidth: { md: "89%", xs: "99%" }, justifyContent: "space-between", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "50%", xs: "100%" }, p: "1rem", alignItems: "center", justifyContent: "center", my: { md: 0, xs: 8 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "700", fontSize: { md: "50px", xs: "33px" } }}>Let's Help Each & Every Creature of God</Typography>
          <Typography variant="body1" sx={{ color: '#f2f2f2', mt: '1rem', fontSize: { md: "19px", xs: "17px" }, fontWeight: "600" }}>Enter your lost pet's information into the form above to start spreading awareness. We will create a lost pet flyer and post it to your city's Lost & Found Pet Facebook page to start reaching users in your area.</Typography>
          <Link to="/register" style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "1.5rem" }}>Join to Create Impact !</Button></Link>
        </Grid>
        <Grid item sx={{ background: "#ffffffd4", width: { md: "40%", xs: "97%" }, p: { md: '1.5rem', xs: "1.3rem 0.9rem" }, borderRadius: "7px", mb: { md: 0, xs: 8 }, margin: "auto" }} component="form" onSubmit={handleSubmit} >
          <Typography variant="h5" sx={{ color: '#212121', fontWeight: "600" }}>Report A Rescue Near You!</Typography>
          <Typography variant="body1" sx={{ color: '#212121', fontWeight: "500", my: "1rem" }}>Enter your pet's information to instantly start spreading local awareness.</Typography>
          <Stack>
            <TextField label="Name" sx={{ my: 1 }} name="name" id="name" value={username} onChange={(e) => setName(e.target.value)} required />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField disabled sx={{ my: 1, mr: 1, width: "20%" }} name="code" id="code" value={countryCode} onChange={(e) => setCode(e.target.value)} />
              <TextField label="Phone" sx={{ my: 1, width: "80%" }} name="phone" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Box>
            <TextField required label="Location" sx={{ my: 1 }} name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} InputProps={{
              endAdornment: <InputAdornment position="end"><IconButton onClick={()=>setGetLocation(true)}><ShareLocationRounded /></IconButton></InputAdornment>,
            }} />
            <Box sx={{ display: "flex", alignItems: "center", my: "8px", p: "12px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Animal's Image :&nbsp; </Typography> <input type="file" id="animal" accept='image/*' name="img" required /></Box>
          </Stack>
          <Button variant='contained' sx={{ borderRadius: "3px", mt: '1rem', marginLeft: "0", }} type="submit" >Submit Details</Button>
        </Grid>
      </Grid>
      <Modal open={success} onClose={() => setSuccess(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card sx={{ position: "relative", width: { md: "50%", xs: '80%' }, minHeight: { md: "50%", xs: "65%" }, borderRadius: "5px", p: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <IconButton onClick={() => setSuccess(false)} sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <Close />
          </IconButton>
          <img src="https://img.freepik.com/premium-vector/friendly-female-volunteer-character-feeding-dog-animal-shelter-pound-young-african-american-woman-with-bowl_1016-13732.jpg" alt="" height="200px" />
          <Typography variant="h5" sx={{ fontWeight: "700", textAlign: "center", pt: "10px" }}>Congratulations! {username ? username : "Friend"}, Your Rescue Has Been Located</Typography>
          <Link to={path.rescue} style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "14px" }}>Explore Rescues</Button></Link>
        </Card>
      </Modal>
    </Hero>
  )
}

export default HeroSection