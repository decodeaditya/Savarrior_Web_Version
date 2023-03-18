import { AppBar, Box, Toolbar, Typography, Grid, styled, ListItemIcon, Avatar, Menu, MenuItem, ListItem, ListItemText, Drawer, List, ListItemButton, Divider, IconButton } from '@mui/material'
import { Button, colors } from '../Theme'
import { Container } from '@mui/system'
import React, { useContext } from 'react'
import { HomeRounded, HomeWorkRounded, LoginRounded, MenuRounded, PersonOutlineSharp, PersonRounded, PetsRounded } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { path } from '../path'


const NavLink = styled(Link)((props) => ({
    color: "#212121",
    fontSize: "16px",
    marginLeft: "7px",
    padding: "7px",
    textDecoration: "none",
    transition: "all 0.2s ease",
    ['&:hover']: {
        color: colors.primary,
    },
}));

const report = path.report

const Links = [
    {
        name: "Home",
        path: path.home,
        icon: <HomeRounded />
    },
    {
        path: path.ngo,
        name: "Explore NGOs",
        icon: <HomeWorkRounded />
    },
    {
        name: "Nearby Rescue",
        path: path.rescue,
        icon: <PetsRounded />
    },
    {
        name: "Join Us",
        path: path.register,
        icon: <HomeRounded />
    },
]

const Header = () => {

    const [ProfileanchorEl, setProfileAnchorEl] = React.useState(null);
    const Profileopen = Boolean(ProfileanchorEl);

    const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setProfileAnchorEl(null);
    };

    const [SideBaranchorEl, setSideBarAnchorEl] = React.useState(null);
    const SideBaropen = Boolean(SideBaranchorEl);

    const handleSideBarClick = (event: React.MouseEvent<HTMLElement>) => {
        setSideBarAnchorEl(event.currentTarget);
    };

    const handleSideBarClose = () => {
        setSideBarAnchorEl(null);
    };


    const path = useLocation()
    const slug = path.pathname

    const { CurrentUser } = useContext(AuthContext)
    const Guest = CurrentUser?.isAnonymous

    const logout = () => {
        signOut(auth)
        handleProfileClose()
    }

    return (
        <React.Fragment>
            <Box sx={{ display: slug === "/register" || slug === "/login" ? "none" : "block" }}>
                <AppBar sx={{ background: "#fff", fontSize: "25px", py: "0.5rem" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{ color: "#5f5f5f", display: "flex", alignItems: "center" }}>
                            <Grid container justifyContent={'space-between'} alignItems={"center"}>
                                <Grid item> <img src="https://assets-give.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png" style={{ width: '110px' }} alt="Savarrior" /></Grid>
                                <Grid item sx={{ display: { md: 'flex', xs: "none" }, alignItems: "center" }}>
                                    {Links.map((l) => (
                                        <NavLink to={l.path} sx={{ color: slug === l.path ? colors.primary : '#212121' }}><Typography variant="body1">{l.name}</Typography></NavLink>
                                    ))}
                                </Grid>
                                <Grid item sx={{ display: 'flex' }}>
                                    <Link to={report} style={{textDecoration:"none"}}>
                                        <Button variant="contained">Report A Rescue</Button>
                                    </Link>
                                    <IconButton sx={{ display: { md: "none", xs: "inline-flex" }, background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px", }} onClick={handleSideBarClick}><MenuRounded /></IconButton>
                                    <Avatar src={CurrentUser?.photoURL} sx={{ display: { xs: "none", md: "inline-flex" }, background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px", }} onClick={handleProfileClick}><PersonOutlineSharp sx={{ color: colors.primary, fontSize: "26px" }} /></Avatar>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>


            <Menu
                anchorEl={ProfileanchorEl}
                id="account-menu"
                open={Profileopen}
                onClose={handleProfileClose}
                onClick={handleProfileClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {!CurrentUser &&
                    <>
                        <Link to="/login" style={{ textDecoration: "none", color: "black" }}><MenuItem onClick={handleProfileClose}>
                            Login
                        </MenuItem></Link>
                        <Link to="/register" style={{ textDecoration: "none", color: "black" }}><MenuItem onClick={handleProfileClose}>
                            Register
                        </MenuItem></Link>
                    </>}
                {CurrentUser &&
                    <>
                        <Box sx={{ p: "10px 13px" }}>
                            <Typography sx={{ fontWeight: "600" }}>Namaste, {CurrentUser?.displayName}</Typography>
                            {Guest && <Typography sx={{ fontWeight: "600" }}>(Guest User)</Typography>}
                        </Box>
                        <Divider /><MenuItem onClick={logout}>
                            Logout
                        </MenuItem>
                        <Link to="/register" style={{ textDecoration: "none", color: "black" }}><MenuItem onClick={handleProfileClose}>
                            My Rescues
                        </MenuItem></Link>
                    </>}
            </Menu>


            <Drawer open={SideBaropen} anchor="left" anchorEl={SideBaranchorEl} onClick={handleSideBarClose} onClose={handleSideBarClose}>
                {CurrentUser &&
                    <Box container sx={{ justifyContent: "center", alignItems: "center", padding: "1rem", display: "flex", flexDirection: "column" }}>
                        <>
                            <Avatar src={CurrentUser?.photoURL} sx={{ background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px", width: 56, height: 56 }}><PersonOutlineSharp sx={{ color: colors.primary, fontSize: "26px" }} /></Avatar>
                            <Typography sx={{ fontWeight: "600" }}>Namaste, {CurrentUser?.displayName}</Typography>
                            <Divider sx={{ borderTop: "2px solid #f2f2f2" }} />
                        </>
                    </Box>}
                <List sx={{ width: 250 }}>
                    {Links.map((l) => (
                        <NavLink to={l.path} sx={{ marginLeft: 0, padding: 0 }}>
                            <ListItem key={l.name} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {l.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={l.name} />
                                </ListItemButton>
                            </ListItem></NavLink>
                    ))}
                    {!CurrentUser &&
                        <>
                            <Divider sx={{ borderTop: "2px solid #f2f2f2" }} />
                            <NavLink to="/login" sx={{ marginLeft: 0, padding: 0 }}> <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LoginRounded />
                                    </ListItemIcon>
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                            </ListItem></NavLink>

                            <NavLink to="/register" sx={{ marginLeft: 0, padding: 0 }}> <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <PersonRounded />
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </ListItemButton>
                            </ListItem></NavLink>
                        </>
                    }
                </List>
            </Drawer>


        </React.Fragment>
    )
}



export default Header