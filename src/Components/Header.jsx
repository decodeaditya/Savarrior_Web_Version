import { AppBar, Box, Toolbar, Typography, Grid, Link, styled, IconButton } from '@mui/material'
import { Button,colors } from '../Theme'
import { Container } from '@mui/system'
import React from 'react'
import { PersonOutlineSharp } from '@mui/icons-material'


const NavLink = styled(Link)((props) => ({
    color: "#212121",
    fontSize: "16px",
    marginLeft: "7px",
    padding:"7px",
    textDecoration: "none",
    ['&:hover']: {
        color: "#212121",
    }
}));

const Header = () => {
    return (
        <Box>
            <AppBar sx={{ background: "#fff", fontSize: "25px",py:"0.5rem" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ color: "#5f5f5f",display:"flex",alignItems:"center" }}>
                        <Grid container justifyContent={'space-between'} alignItems={"center"}> 
                            <Grid item> <Typography variant="h5" sx={{ fontWeight: "800" }}> <span style={{ color: "#329c92" }}>SAVA</span>RRIOR</Typography></Grid>
                            <Grid item sx={{ display: 'flex',alignItems:"center" }}>
                                <NavLink><Typography variant="body1">Home</Typography></NavLink>
                                <NavLink><Typography variant="body1">Explore NGOs</Typography></NavLink>
                                <NavLink><Typography variant="body1">Nearby Rescues</Typography></NavLink>
                                <NavLink><Typography variant="body1">Join Us</Typography></NavLink>
                            </Grid>
                            <Grid item sx={{ display: 'flex' }}> 
                            <Button variant="contained">Report A Rescue</Button>
                            <IconButton sx={{border:`2px solid ${colors.primary}`,marginLeft:"7px"}}><PersonOutlineSharp sx={{color:colors.primary,fontSize:"26px"}}/></IconButton>
                            </Grid>

                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header