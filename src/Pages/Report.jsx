import { Grid, Typography, Box, TextField, InputAdornment, IconButton,Divider,Card } from '@mui/material';
import React, { useContext } from 'react'
import { SquareButton,colors } from '../Theme';
import { signInAnonymously, updateProfile } from "firebase/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../firebase';
import { ShareLocationRounded } from '@mui/icons-material';
import { v4 as uuid } from 'uuid'
import { AuthContext } from '../Context/AuthContext';
import { locationOptions } from '../path';
import { Helmet } from 'react-helmet';

export default function Report({url}) {

  const { CurrentUser } = useContext(AuthContext)
  const [countryCode, setCode] = React.useState("+91")
  const [location, setLocation] = React.useState(null)
  const [latitude, setLatitude] = React.useState(null)
  const [longitude, setLongitude] = React.useState(null)

  const [username, setName] = React.useState(CurrentUser?.displayName)

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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

          !CurrentUser && updateProfile(res.user, { displayName: name })

          updateDoc(doc(db, "reportedRescues", "reportedRescues"), {
            rescues: arrayUnion({
              id: uuidId,
              name: name,
              location: [{ address: locate }, { coords: [{ latitude: latitude }, { longitude: longitude }] }],
              phone: PhoneNumber,
              img: downloadURL
            })
          })

        });
      })
    setLatitude("")
    setLongitude("")
    setLocation("")
  }

  const getLocation = async () => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)

        // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cd4204a0296b4fccabfbeaaa86f29d9e`).then(res => res.json()).then(res => setLocation(res.results[0].formatted))
        fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`, locationOptions)
          .then(response => response.json())
          .then(response => setLocation(response.results[0].address))
          .catch(err => console.error(err));
      });
    } else {
      window.alert("Sorry, Your Browser is Not Comapatible for Auto Locating")
    }
  }

  return (
    <Grid container component="main" sx={{ background:'#f1f1f1',minHeight: '90vh', mt: "4rem", alignItems: "center", justifyContent: "center" }}>
        <Helmet><title>Report A Rescue | {url}</title></Helmet>
        <Card
          sx={{
            my: 4,
            mx: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p:{md:"2rem 1.2rem",xs:"1rem"},
            borderRadius:"5px",
            width:{md:"40%",xs:"90%"}
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>Report A Rescue</Typography>
          <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: "1.1rem" }}>
            <TextField label="Name" sx={{ my: 1 }} name="name" id="name" value={username} onChange={(e) => setName(e.target.value)} required fullWidth />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField sx={{ my: 1, mr: 1, width: "20%" }} name="code" id="code" value={countryCode} onChange={(e) => setCode(e.target.value)} />
              <TextField label="Phone" sx={{ my: 1, width: "80%" }} name="phone" id="phone" required />
            </Box>
            <TextField fullWidth required label="Location" sx={{ my: 1 }} name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} InputProps={{
              endAdornment: <InputAdornment position="end"><IconButton onClick={getLocation}><ShareLocationRounded /></IconButton></InputAdornment>,
            }} />
            <Box sx={{ display: "flex", alignItems: "center", my: "8px", p: "12px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Animal's Image :&nbsp; </Typography> <input type="file" id="animal" accept='image/*' name="img" required /></Box>
            <SquareButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Details
            </SquareButton>
          </Box>
        </Card>
      </Grid>
  );
}