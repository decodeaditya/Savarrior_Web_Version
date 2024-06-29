import { AppBar, Toolbar, Typography, Grid, styled, Box,  ListItem, ListItemText, Drawer, List, ListItemButton, IconButton,  } from '@mui/material'
import { Button, colors } from '../Theme'
import { Container } from '@mui/system'
import React, { useContext,  } from 'react'
import { Menu } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { path } from '../path'
import logo from './logo.png'

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
    },
    {
        path: path.ngo,
        name: "Explore NGOs",
    },
    {
        name: "Rescues Nearby",
        path: path.rescue,
    },
    {
        name: "Join Us",
        path: path.register,
    },
]

const Header = () => {

   

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

    return (
        <React.Fragment>
            <Box sx={{ display: slug === "/register" || slug === "/login" ? "none" : "block" }}>
                <AppBar sx={{ background: "#ffffffc7", fontSize: "25px", py: "0.5rem",boxShadow:"none",backdropFilter: 'blur(8px)' }}>
                    <Container sx={{maxWidth: { md: "89%", xs: "100%" }}}>
                        <Toolbar disableGutters sx={{ color: "#5f5f5f", display: "flex", alignItems: "center" }}>
                            <Grid container justifyContent={'space-between'} alignItems={"center"}>
                                <Link to="/"> <Grid item> <img src={logo} style={{ width: '115px' }} alt="Savarrior" /></Grid></Link>
                                <Grid item sx={{ display: { md: 'flex', xs: "none" }, alignItems: "center" }}>
                                    {Links.map((l) => (
                                        <NavLink key={l.path} to={l.path} sx={{ color: slug === l.path ? colors.primary : '#212121' }}><Typography variant="body1" style={{fontWeight:500}}>{l.name}</Typography></NavLink>
                                    ))}
                                </Grid>
                                <Grid item sx={{ display: 'flex', alignItems: "center" }}>
                                    <Link to={report} style={{ textDecoration: "none" }}>
                                        <Button variant="contained" sx={{textTransform:"capitalize"}}>Download App</Button>
                                    </Link>
                                  <Menu sx={{ml:1 ,display: { md: "none", xs: "inline-flex" }}} onClick={handleSideBarClick}/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Drawer open={SideBaropen} anchor="bottom" anchorEl={SideBaranchorEl} onClick={handleSideBarClose} onClose={handleSideBarClose}>
                <List>
                    {Links.map((l) => (
                        <NavLink to={l.path} sx={{ marginLeft: 0, padding: 0 }} key={l.path}>
                            <ListItem key={l.name} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={l.name} sx={{textAlign:"center"}} />
                                </ListItemButton>
                            </ListItem></NavLink>
                    ))}
                </List>
            </Drawer>

        </React.Fragment>
    )
}





export default Header