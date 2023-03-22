import React, { useState } from 'react';
import { Paper, Box, Grid, Avatar, CssBaseline, TextField, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SquareButton, colors } from '../Theme';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


export default function Login() {

  const Navigate = useNavigate()


  const setUp = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Captcha Resolved");
        handleSubmit();
      }
    }, auth);
  }



  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    setUp()

    const phoneNumber = data.get("phone");
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        const code = prompt(`Enter Otp Sent to ${phoneNumber}`);
        confirmationResult.confirm(code).then((result) => {
          const user = result.user;
          console.log(user)
          Navigate("/")
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert(error)
        });
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error)
      });
  }


  const [method, setMethod] = useState("email")

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
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
        <Box sx={{ position: "absolute", background: "#fff", p: '10px', borderRadius: "5px", top: '5px', left: '5px' }}><img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/icons/impactguru.png" width={"110px"} alt="Savarrior" /></Box>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
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
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {method !== "phone" &&
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </>}
            {method === "phone" &&
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone"
                  label="Enter Your Registered Phone Number"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                />
              </>
            }
            <SquareButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {method === "phone" ? "Get Otp" : "Sign In"}
            </SquareButton>
            <SquareButton
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={() => setMethod(method === "phone" ? "email" : "phone")}
            >
              Or Use {method === "phone" ? "Email" : "Phone Number"}
            </SquareButton>
            <Grid container sx={{ justifyContent: "center" }}>
              {/* <Grid item xs>
                  <Link to="/" style={{color:colors.primary}}>
                    Forgot password?
                  </Link>
                </Grid> */}
              <Grid item>
                Don’t have an account?&nbsp;
                <Link to="/register" style={{ color: colors.primary }}>
                  Register
                </Link>
              </Grid>
            </Grid>
          </Box>
          <div id="recaptcha-container"></div>
        </Box>
      </Grid>
    </Grid>
  );
}