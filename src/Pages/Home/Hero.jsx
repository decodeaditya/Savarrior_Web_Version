import { Grid, styled, Typography, Box,IconButton, Modal, Card } from '@mui/material';
import React, { useContext, } from 'react'
import { Button } from '../../Theme';
import { Close } from '@mui/icons-material';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { locationOptions, path } from '../../path';
import heroImage from "../heroBg-overlay.jpg"


const Hero = styled(Box)(({theme}) => ({
  minHeight: "84vh",
  marginTop: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  background: `url(${heroImage}) center`,
  backgroundSize: "cover",
  [theme.breakpoints.down('md')]: {
    minHeight:"75vh"
}
}));

const HeroSection = () => {


  const { CurrentUser } = useContext(AuthContext)
  const [countryCode, setCode] = React.useState("+91")
  // const [location, setLocation] = React.useState("")
  // const [latitude, setLatitude] = React.useState("")
  // const [longitude, setLongitude] = React.useState("")
  const [success, setSuccess] = React.useState(false)
  const [username, setName] = React.useState(CurrentUser?.displayName)
  const [phone, setPhone] = React.useState(CurrentUser?.phoneNumber?.slice(3))


  // const handleSubmit = async (e) => {

  //   e.preventDefault()
  //   const data = new FormData(e.currentTarget)
  //   const name = username
  //   const phone = data.get("phone")
  //   const locate = location
  //   const PhoneNumber = countryCode + " " + phone
  //   const file = data.get("img")
  //   const uuidId = uuid()

  //   const res = !CurrentUser ? await signInAnonymously(auth) : CurrentUser

  //   const storageRef = ref(storage, name + uuidId);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on('state_changed',
  //     (snapshot) => { },
  //     (error) => {
  //       console.log(error)
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

  //         !CurrentUser && updateProfile(res.user, { displayName: name })

  //         const date = new Date().toLocaleDateString()

  //         await updateDoc(doc(db, "reportedRescues", "reportedRescues"), {
  //           rescues: arrayUnion({
  //             id: uuidId,
  //             name: name,
  //             location: [{ address: locate }, { coords: [{ latitude: latitude }, { longitude: longitude }] }],
  //             phone: PhoneNumber,
  //             img: downloadURL,
  //             userId: res.uid,
  //             timestamp: date
  //           })
  //         })

  //         setSuccess(true)
  //         sendMsg({
  //           heading: `New Rescue Added by ${name}`,
  //           img: downloadURL,
  //           subtitle: `Dear Animal Lover, A New Rescue Has been Located at ${location}`
  //         })


  //       });
  //     })
  // }

  // const fetchAddress = async (latitude, longitude) => {
  //   const response = await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`, locationOptions)
  //   const locate = await response.json()
  //   return locate
  // }

  // const [getLocation, setGetLocation] = useState(false)

  // useEffect(() => {
  //   const getLocationFun = () => {

  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(async (position) => {

  //         setLatitude(position.coords.latitude)
  //         setLongitude(position.coords.longitude)

  //         await fetchAddress(latitude, longitude).then(res => {
  //           setLocation(res.results[0].address)
  //         })

  //       });
  //     } else {
  //       window.alert("Sorry, Your Browser is Not Compatible for Auto Locating")
  //     }
  //   }

  //   setGetLocation(false)
  //   return getLocationFun()
  // }, [getLocation])


  return (
    <Hero>
      <Grid container sx={{ maxWidth: { md: "89%", xs: "99%" }, justifyContent: "space-between", alignItems: "center" }}>
        <Grid item sx={{ width: { md: "60%", xs: "100%" }, p: "1rem", alignItems: "center", justifyContent: "center", my: { md: 0, xs: 8 } }}>
          <Typography variant="h3" sx={{ color: '#fff', fontWeight: "800", fontSize: { md: "50px", xs: "33px" },textTransform:"uppercase" }}>Let's Help Each & Every Creature of God</Typography>
          <Typography variant="body1" sx={{ color: '#f2f2f2', mt: '1rem', fontSize: { md: "19px", xs: "17px" }, fontWeight: "600" }}>"Killing animals for sport, for pleasure, for adventure, and for hides and furs is a phenomenon which is at once disgusting and distressing. There is no justification in indulging in such acts of brutality." -Dalai Lama</Typography>
          <Link to="/register" style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "1.5rem",marginLeft:"0" }}>Join to Create Impact !</Button></Link>
        </Grid>
        {/* <Grid item sx={{width: { md: "50%", xs: "100%" }, p: { md: '1.5rem', xs: "1.3rem 0.9rem" }, borderRadius: "7px", mb: { md: 0, xs: 8 }, margin: "auto" }} component="form" onSubmit={handleSubmit} > */}
          {/* <Box sx={{ width: { md: "93%", xs: "93%" }, p: "0.6rem" }}>
            <img src={heroimage} width="100%" alt="Join Us" style={{
              borderRadius: "10px",
            }} />
          </Box> */}
          {/* <Typography variant="h5" sx={{ color: '#212121', fontWeight: "600" }}>Report A Rescue Near You!</Typography>
          <Typography variant="body1" sx={{ color: '#212121', fontWeight: "500", my: "1rem" }}>Enter Injured Animal's information to instantly start spreading local awareness.</Typography>
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
        */}
        {/* </Grid> */}
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