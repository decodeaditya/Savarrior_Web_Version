import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { SquareButton, colors } from '../Theme';
import { Link } from 'react-router-dom';
import { Radio } from '@mui/material';




export default function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const [selectedValue, setSelectedValue] = React.useState('Individual');
    console.log(selectedValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?strayanimals?animalshelp)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box sx={{ position: "absolute", background: "#fff", p: '10px', borderRadius: "5px", top: '5px', left: '5px' }}><img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/icons/impactguru.png" width={"110px"} /></Box>
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
                        Register
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: "2rem" }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box sx={{ display: "flex", alignItems: "center", ml: "5px" }}>
                                <Radio
                                    checked={selectedValue === 'Individual'}
                                    onChange={handleChange}
                                    value="Individual"
                                    name="radio-buttons"
                                />Individual
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", ml: "5px" }}>
                                <Radio
                                    checked={selectedValue === 'Organistion'}
                                    onChange={handleChange}
                                    value="Organistion"
                                    name="radio-buttons"
                                />Organisation
                            </Box>
                        </Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Full Name"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Phone Number"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Box sx={{ display: "flex", alignItems: "center", my: "15px", p: "15px 10px", border: "1px solid #c1c1c1", borderRadius: "5px" }}><Typography >Profile Image :&nbsp; </Typography> <input type="file" id="avatar" accept='image/*' /></Box>
                        <SquareButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </SquareButton>
                        <Grid container>
                            <Grid item>
                                Have an account?&nbsp;
                                <Link to="/login" style={{ color: colors.primary }}>
                                    Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}