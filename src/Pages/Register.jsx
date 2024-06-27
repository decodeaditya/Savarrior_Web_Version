import React, { useState, useContext, useEffect } from 'react';
import { Avatar, CssBaseline, TextField, Paper, Box, Grid, Typography, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SquareButton, colors } from '../Theme';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { EmailAuthProvider, getAuth, linkWithCredential, PhoneAuthCredential, PhoneAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, updateCurrentUser, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../firebase';
import { Helmet } from 'react-helmet';
import logo from '../Components/logo.png'

export default function Register() {

    const { CurrentUser } = useContext(AuthContext)
    const [name, setName] = useState(CurrentUser ? CurrentUser.displayName : "")
    const [countryCode, setCode] = React.useState("+91")
    const [phone, setPhone] = React.useState("")
    const finalPhone = countryCode + phone
    const [isNgo, setIsNgo] = useState(false)
    const [location, setLocation] = useState("")
    const [services, setServices] = useState([])
    const Navigate = useNavigate()


    // const setUp = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    //         'size': 'invisible',
    //         'callback': (response) => {
    //             console.log("Captcha Resolved");
    //             handleSubmit();
    //         }
    //     }, auth);
    // }


    const handleSubmit = async (e) => {
        e.preventDefault()

        // const data = new FormData(e.currentTarget)
        // const profileImg = data.get('avatar')
        // const ngoImage = data.get("ngoImage")
        // const email = data.get("email")
        // const pass = data.get("password")
        // const slug = name.replace(" ", "-").toLowerCase()

        // setUp()

        // const phoneNumber = finalPhone;
        // const appVerifier = window.recaptchaVerifier;

        // await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        //     .then((confirmationResult) => {
        //         const code = prompt(`Enter Otp Sent to ${finalPhone}`);

        //         if (CurrentUser?.isAnonymous) {
        //             const phoneCredential = PhoneAuthProvider.credential(confirmationResult.verificationId, code)

        //             linkWithCredential(auth.currentUser, phoneCredential)
        //                 .then(async (usercred) => {
        //                     const user = usercred.user;
        //                     const emailCredential = EmailAuthProvider.credential(email, pass);

        //                     await linkWithCredential(auth.currentUser, emailCredential)
        //                         .then((usercred) => {
        //                             const user = usercred.user;

        //                             const storageRef = ref(storage, name + user.uid);
        //                             const uploadTask = uploadBytesResumable(storageRef, profileImg);

        //                             uploadTask.on('state_changed',
        //                                 (snapshot) => { },
        //                                 (error) => {
        //                                     alert(error)
        //                                 },
        //                                 () => {
        //                                     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        //                                         updateProfile(user, { displayName: name, email: email, photoURL: downloadURL })

        //                                         const userData = isNgo ? {
        //                                             id: user.uid,
        //                                             email: email,
        //                                             name: name,
        //                                             phone: finalPhone,
        //                                             img: downloadURL,
        //                                             isNgo,
        //                                             location: location,
        //                                             ngoImage: ngoImage,
        //                                             services: services,
        //                                             slug: slug,
        //                                         } :
        //                                             {
        //                                                 id: user.uid,
        //                                                 email: email,
        //                                                 name: name,
        //                                                 phone: finalPhone,
        //                                                 img: downloadURL,
        //                                                 isNgo,
        //                                             }

        //                                         { !isNgo && setDoc(doc(db, "registeredUsers", user.uid), userData) }
        //                                         { isNgo && setDoc(doc(db, "registeredNGOs", user.uid), userData) }
        //                                         { isNgo && updateDoc(doc(db, "ngos", "ngos"), { ngoList: arrayUnion(userData) }) }

        //                                     })
        //                                 })
        //                                 Navigate("/")
        //                         }).catch((error) => {
        //                             alert(error.code.replace("-"," "))
        //                         });
        //                 }).catch((error) => {
        //                     alert(error.code.replace("-"," "))
        //                 });
        //         }
        //         else {
        //             confirmationResult.confirm(code).then((result) => {
        //                 const user = result.user;
        //                 const storageRef = ref(storage, name + user.uid);
        //                 const uploadTask = uploadBytesResumable(storageRef, profileImg);

        //                 uploadTask.on('state_changed',
        //                     (snapshot) => { },
        //                     (error) => {
        //                         alert(error)
        //                     },
        //                     () => {
        //                         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        //                             updateProfile(user, { displayName: name, email: email, photoURL: downloadURL })
        //                             const emailCredential = EmailAuthProvider.credential(email, pass);
        //                             linkWithCredential(auth.currentUser, emailCredential)
        //                                 .then((usercred) => {
        //                                     const user = usercred.user;
        //                                     console.log("Account linking success", user);
        //                                 }).catch((error) => {
        //                                     alert("Account linking error", error);
        //                                 });


        //                             const userData = isNgo ? {
        //                                 id: user.uid,
        //                                 email: email,
        //                                 name: name,
        //                                 phone: finalPhone,
        //                                 img: downloadURL,
        //                                 isNgo,
        //                                 location: location,
        //                                 ngoImage: ngoImage,
        //                                 services: services,
        //                                 slug: slug
        //                             } :
        //                                 {
        //                                     id: user.uid,
        //                                     email: email,
        //                                     name: name,
        //                                     phone: finalPhone,
        //                                     img: downloadURL,
        //                                     isNgo,
        //                                 }

        //                             { !isNgo && setDoc(doc(db, "registeredUsers", user.uid), userData) }
        //                             { isNgo && setDoc(doc(db, "registeredNGOs", user.uid), userData) }
        //                             { isNgo && updateDoc(doc(db, "ngos", "ngos"), { ngoList: arrayUnion(userData) }) }

        //                         });
        //                     })
        //             })
        //             Navigate("/")
        //         }

        //         window.confirmationResult = confirmationResult;
        //     }).catch((error) => {
        //         // Error; SMS not sent
        //         // ...
        //         alert(error)
        //     });
    }

    // const handleChecked = (e) => {
    //     if (e.target.checked === true) {
    //         services.push(e.target.value)
    //     }
    //     else {
    //         const ele = services.filter((service) => {
    //             return service !== e.target.value
    //         })
    //         setServices(ele)
    //     }
    // }

    const Guest = CurrentUser?.isAnonymous

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Helmet><title>Register | Savarrior</title></Helmet>
            <CssBaseline />
            {!Guest && CurrentUser && Navigate("/")}
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/13/21/46/sheep-1822137_960_720.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Link to="/"><Box sx={{ position: "absolute", background: "#fff", p: '10px', borderRadius: "5px", top: '5px', left: '5px' }}><img src={logo} width={"120px"} alt="Savarrior" /></Box></Link>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: colors.primary }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: "1.1rem" }}>
                        <Box sx={{ background: "#f1f1f1", p: "15px", borderRadius: "15px",textAlign:"center" }}>
                            <Box
                                component="img"
                                sx={{
                                    width: '50%',
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                    padding:2
                                }}
                                alt={"Download App"}
                                src={"https://cdn-icons-png.flaticon.com/512/3367/3367584.png"}
                            />
                            <Typography variant="h5" sx={{ fontWeight: "800", textTransform: "uppercase",textAlign:"center" }}>Want to Join Us?</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "600", fontSize: "17px" }}>Get Our Latest Savarrior App to Register and Then Coutinue!</Typography>
                        </Box>

                        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                            <TextField sx={{ my: 1, mr: 1, width: "20%" }} name="code" id="code" value={countryCode} onChange={(e) => setCode(e.target.value)} disabled/>
                            <TextField label="Phone" sx={{ my: 1, width: "80%" }} name="phone" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", my: "15px", p: "15px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Profile Image :&nbsp; </Typography> <input type="file" name="avatar" accept='image/*' /></Box> */}
                        {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "15px", mb: 0, p: "15px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}>
                            <Checkbox value={isNgo} onChange={(e) => { setIsNgo(e.target.checked) }} /> Are You a Animal NGO?
                        </Box>
                        {isNgo &&
                            <>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                    autoFocus
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: "15px", p: "15px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}>
                                    <Checkbox value="Adoption" onChange={(e) => { handleChecked(e) }} />Adoption
                                    <Checkbox value="Foster" onChange={(e) => { handleChecked(e) }} />Foster
                                    <Checkbox value="Sterlization" onChange={(e) => { handleChecked(e) }} />Sterlization
                                </Box>
                                <TextField name="ngoImage" label="A Image Link" type="url" fullWidth />
                            </>
                        } */}
                        <Link to="/download-app">
                        <SquareButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Download App Now
                        </SquareButton>
                        </Link>
                        <Box sx={{ mb: { xs: "4rem", md: 0 }, display: 'flex', justifyContent: "center" }}>
                            Have an account?&nbsp;
                            <Link to="/login" style={{ color: colors.primary }}>
                                Login
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            {/* <Modal
                open={openOtp}
                onClose={() => setOpenOtp(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <TextField value={otp} onChange={handleChange}/>
            </Modal> */}
        </Grid>
    );
}