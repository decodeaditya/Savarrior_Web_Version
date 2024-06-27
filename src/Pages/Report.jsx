import { Grid, Typography, Box, TextField, InputAdornment, IconButton, Divider, Card, Modal } from '@mui/material';
import React from 'react'
import { SquareButton, colors } from '../Theme';
// import { signInAnonymously, updateProfile } from "firebase/auth";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore"
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { auth, db, storage } from '../firebase';
import { ShareLocationRounded, Close } from '@mui/icons-material';
// import { v4 as uuid } from 'uuid'
// import { AuthContext } from '../Context/AuthContext';
// import { locationOptions } from '../path';
import { Helmet } from 'react-helmet';
import { path } from '../path';
import { Button } from '../Theme';
import { Link } from 'react-router-dom';
// import { MessageContext } from '../Context/MessageContext';

export default function Report({ url }) {

  // const { CurrentUser } = useContext(AuthContext)
  // const [countryCode, setCode] = useState("+91")
  // const [location, setLocation] = useState(null)
  // const [latitude, setLatitude] = useState(null)
  // const [longitude, setLongitude] = useState(null)
  // const [success, setSuccess] = useState(false)
  // const [username, setName] = useState(CurrentUser?.displayName)

  // const { sendMsg } = useContext(MessageContext)

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

  //   const storageRef = ref(storage, uuidId);
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
  //   setLatitude("")
  //   setLongitude("")
  //   setLocation("")
  // }

  // const fetchAddress = async (latitude, longitude) => {
  //   const response = await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${latitude}%2C${longitude}&language=en`, locationOptions)
  //   const locate = await response.json()
  //   return locate
  // }

  // const [getLocation,setGetLocation] = useState(false)

  // useEffect(() => {
  //   const getLocationFun = () => {

  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(async (position) => {

  //         setLatitude(position.coords.latitude)
  //         setLongitude(position.coords.longitude)

  //         await fetchAddress(latitude, longitude).then(res => {
  //           setLocation(res.results[0].address)
  //         })

  //         setGetLocation(false)

  //       });
  //     } else {
  //       window.alert("Sorry, Your Browser is Not Compatible for Auto Locating")
  //     }
  //   }

  //   return getLocation&&getLocationFun()
  // },[getLocation])


  return (
    // <Grid container component="main" sx={{ background: '#f1f1f1', minHeight: '90vh', mt: "4rem", alignItems: "center", justifyContent: "center" }}>
    //   <Helmet><title>Report A Rescue | {url}</title></Helmet>
    //   <Card
    //     sx={{
    //       my: 4,
    //       mx: 2,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       p: { md: "2rem 1.2rem", xs: "1rem" },
    //       borderRadius: "5px",
    //       width: { md: "40%", xs: "90%" }
    //     }}
    //   >
    //     <Typography variant="h4" sx={{ fontSize: { md: "29px", xs: "23px" }, fontWeight: "800", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>Report A Rescue</Typography>
    //     <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "0.8rem", background: colors.primary }} />
    //     <Box component="form" onSubmit={handleSubmit} sx={{ width: "96%" }}>
    //       <TextField label="Name" sx={{ my: 1 }} name="name" id="name" value={username} onChange={(e) => setName(e.target.value)} required fullWidth />
    //       <Box sx={{ display: "flex", alignItems: "center" }}>
    //         <TextField disabled sx={{ my: 1, mr: 1, width: "20%" }} name="code" id="code" value={countryCode} onChange={(e) => setCode(e.target.value)} />
    //         <TextField label="Phone" sx={{ my: 1, width: "80%" }} name="phone" id="phone" required />
    //       </Box>
    //       <TextField fullWidth required label="Location" sx={{ my: 1 }} name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)} InputProps={{
    //         endAdornment: <InputAdornment position="end"><IconButton onClick={()=>setGetLocation(true)}><ShareLocationRounded /></IconButton></InputAdornment>,
    //       }} />
    //       <Box sx={{ display: "flex", alignItems: "center", my: "8px", p: "12px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Animal's Image :&nbsp; </Typography> <input type="file" id="animal" accept='image/*' name="img" required /></Box>
    //       <SquareButton
    //         fullWidth
    //         type="submit"
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //       >
    //         Submit Details
    //       </SquareButton>
    //     </Box>
    //   </Card>
    //   <Modal open={success} onClose={() => setSuccess(false)}
    //     sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    //     <Card sx={{ position: "relative", width: { md: "50%", xs: '80%' }, minHeight: { md: "50%", xs: "65%" }, borderRadius: "5px", p: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    //       <IconButton onClick={() => setSuccess(false)} sx={{ position: "absolute", top: "10px", right: "10px" }}>
    //         <Close />
    //       </IconButton>
    //       <img src="https://img.freepik.com/premium-vector/friendly-female-volunteer-character-feeding-dog-animal-shelter-pound-young-african-american-woman-with-bowl_1016-13732.jpg" alt="" height="200px" />
    //       <Typography variant="h5" sx={{ fontWeight: "700", textAlign: "center", pt: "10px" }}>Congratulations! {username ? username : "Friend"}, Your Rescue Has Been Located</Typography>
    //       <Link to={path.rescue} style={{ textDecoration: "none" }}><Button variant="contained" sx={{ mt: "14px" }}>Explore Rescues</Button></Link>
    //     </Card>
    //   </Modal>
    // </Grid>
    <>Hi</>
  );
}