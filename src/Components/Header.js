import { AppBar, Box, Toolbar, Typography, Grid, styled,ListItemIcon, Avatar, Menu, MenuItem, ListItem, ListItemText, Drawer, List, ListItemButton, Divider, IconButton } from '@mui/material'
import { Button, colors } from '../Theme'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { HomeRounded, MenuRounded, PersonOutlineSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const NavLink = styled(Link)((props) => ({
    color: "#212121",
    fontSize: "16px",
    marginLeft: "7px",
    padding: "7px",
    textDecoration: "none",
    ['&:hover']: {
        color: "#212121",
    },
}));

const Links = [
    {
        name: "Home",
        path: "/",
        icon: <HomeRounded />
    },
    {
        name: "Explore NGOs",
        path: "/ngos-and-people",
        icon: <HomeRounded />
    },
    {
        name: "Nearby Rescue",
        path: "/rescues",
        icon: <HomeRounded />
    },
    {
        name: "Join Us",
        path: "/join-us",
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

    return (
        <React.Fragment>

            <Box>
                <AppBar sx={{ background: "#fff", fontSize: "25px", py: "0.5rem" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{ color: "#5f5f5f", display: "flex", alignItems: "center" }}>
                            <Grid container justifyContent={'space-between'} alignItems={"center"}>
                                <Grid item> <img src="https://assets-give.milaap.org/assets/milaap-logo-tiny-4d3dbc4e55c2aaec351f0f376329c624236c4d6266b910f472684e70603f600d.png" style={{width:'110px'}}/></Grid>
                                <Grid item sx={{ display: {md:'flex',xs:"none"}, alignItems: "center" }}>
                                    {Links.map((l) => (
                                        <NavLink to={l.path}><Typography variant="body1">{l.name}</Typography></NavLink>
                                    ))}
                                </Grid>
                                <Grid item sx={{ display: 'flex' }}>
                                    <Button variant="contained">Report A Rescue</Button>
                                    <IconButton sx={{ display:{md:"none",xs:"inline-flex"},background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px", }} onClick={handleSideBarClick}><MenuRounded/></IconButton>
                                    <Avatar  src="https://mui.com/static/images/avatar/1.jpg" sx={{ display:{xs:"none",md:"inline-flex"},background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px", }} onClick={handleProfileClick}><PersonOutlineSharp sx={{ color: colors.primary, fontSize: "26px" }} /></Avatar>
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
                <MenuItem onClick={handleProfileClose}>
                    <Avatar /> Profile
                </MenuItem>
            </Menu>


            <Drawer open={SideBaropen} variant="temporary" anchor="right" anchorEl={SideBaranchorEl}   onClick={handleSideBarClose} onClose={handleSideBarClose}>
            <Box container sx={{justifyContent:"center",alignItems:"center",padding:"1rem",display:"flex",flexDirection:"column"}}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ background: "#fff", border: `2px solid ${colors.primary}`, marginLeft: "7px"}}sx={{ width: 56, height: 56 }}><PersonOutlineSharp sx={{ color: colors.primary, fontSize: "26px" }} /></Avatar>
                <Typography>John Simon Dyer</Typography>
            </Box>   
            <Divider sx={{borderTop:"2px solid #f2f2f2"}}/>
            <List sx={{ width: 250 }}>
                {Links.map((l) => (
                    <NavLink to={l.path} sx={{marginLeft:0,padding:0}}>
                        <ListItem key={l.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {l.icon}
                                </ListItemIcon>
                                <ListItemText primary={l.name} />
                            </ListItemButton>
                        </ListItem></NavLink>
                ))}
            </List>
            <Divider sx={{borderTop:"2px solid #f2f2f2"}}/>
            <List sx={{ width: 250 }}>
                {Links.map((l) => (
                    <NavLink to={l.path} sx={{marginLeft:0,padding:0}}>
                        <ListItem key={l.name} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {l.icon}
                                </ListItemIcon>
                                <ListItemText primary={l.name} />
                            </ListItemButton>
                        </ListItem></NavLink>
                ))}
            </List>
        </Drawer>


        </React.Fragment>
    )
}



export default Header