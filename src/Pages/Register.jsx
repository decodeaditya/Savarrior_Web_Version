import React, { useContext } from 'react';
import { CssBaseline, Paper, Box, Grid, Typography } from '@mui/material';
import { Button} from '../Theme';
import { Link, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet';
import logo from '../Components/logo.png'
import unity from "../Assets/registerUnity.png"
import sheep from "../Assets/sheep-1822137_960_720.jpg"

export default function Register() {
    const { CurrentUser } = useContext(AuthContext)
    const Navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const Guest = CurrentUser?.isAnonymous

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Helmet><title>Register - Savarrior</title></Helmet>
            <CssBaseline />
            {!Guest && CurrentUser && Navigate("/")}
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${sheep})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
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
                    <Link to="/"><Box sx={{ background: "#fff", pt: '20px', borderRadius: "5px", }}><img src={logo} width={"120px"} alt="Savarrior" /></Box></Link>
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
                                src={unity}
                            />
                            <Typography variant="h5" sx={{ fontWeight: "700", textTransform: "uppercase",textAlign:"center" }}>Want to Join Us?</Typography>
                            <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "17px" }}>Get Our Latest Savarrior App to Register and Then Coutinue!</Typography>
                        </Box>

                        <Link to="/download-app">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Download App Now
                        </Button>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}