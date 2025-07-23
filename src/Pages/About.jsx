import React from 'react'
import { Helmet } from 'react-helmet'
import headImg from '../Assets/header.jpg'
import { Typography, styled, Grid, Divider, Box } from "@mui/material"
import { colors } from '../Theme'
import AG from "../Assets/AG.jpg"
import SM from "../Assets/SM.jpg"
import AD from "../Assets/AD.jpeg"

function AboutPage() {

    const Subscribe = styled(Grid)((props) => ({
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundSize: 'cover',
        textDecoration: 'none',
        background: '#000',
        color: 'white',
        fontSize: '20px',
        minHeight: '200px',
        padding: '20px 2rem',
        position: 'relative',
        margin: '0',
        lineHeight: '1.4',
        zIndex: '1',
        justifyContent: "center",
        ['&::before']: {
            content: '""',
            background: `url(${headImg}) center`,
            zIndex: '-1',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: '0.6',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'cover'
        }
    }))

    return (
        <>
            <Helmet><title>About Us - Savarrior</title></Helmet>

            <Box sx={{ paddingTop: { md: "5rem", xs: "4.5rem" } }} />
            <Subscribe container>
                <Typography variant="h4" sx={{ fontWeight: "700", textTransform: "uppercase" }}>About Us</Typography>
            </Subscribe>
            <Box sx={{ textAlign: "center", p: { md: "4rem 2rem", xs: "3rem 2.3rem" } }}>
                <Typography sx={{ fontSize: { md: "25px", xs: '20px' }, fontWeight: "700", letterSpacing: "-0.04rem", textTransform: "capitalize" }}>Why Savarrior?</Typography>
                <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "0.8rem", background: colors.primary }} />
                <Typography sx={{ maxWidth: "750px", textAlign: "justify", fontWeight: "500", margin: "auto", lineHeight: "2", fontSize: "0.98rem", color: "#4a4a4a" }}>
                    We understand how overwhelming it can be to witness animal cruelty and not know how to help. We are here to support you. We promise to provide you with the tools and resources you need to help animals, and we are committed to building a compassionate community that cares for all beings.<br /><br />By using Savarrior, you will experience the satisfaction of knowing that you have helped save animals' lives, connected with like-minded individuals, and contributed to building a better world for all beings.
                </Typography>
                <Typography sx={{ fontSize: { md: "25px", xs: '20px' }, fontWeight: "700", letterSpacing: "-0.04rem", textTransform: "capitalize", pt: "1rem" }}>Creators</Typography>
                <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "0.8rem", background: colors.primary }} />
                <Grid container sx={{ justifyContent: "center" }}>
                    <Grid item sx={{ background: "#00000014", backdrop: "filter(8px)", padding: "1rem", width: "220px", margin: "10px", borderRadius: "20px", boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}><img style= {{borderRadius:"50%"}} width="120px" src={AD}/><Typography sx={{ fontSize: { md: "20px", xs: '18px', }, fontWeight: "700", mt: "8px" }}>Aditya</Typography><Typography sx={{ fontSize: { md: "18px", xs: '16px' }, fontWeight: "500", color: "#525252" }}>Founder</Typography></Grid>
                    <Grid item sx={{ background: "#00000014", backdrop: "filter(8px)", padding: "1rem", width: "220px", margin: "10px", borderRadius: "20px", boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}><img style= {{borderRadius:"50%"}} width="120px" src={AG}/><Typography sx={{ fontSize: { md: "20px", xs: '18px' }, fontWeight: "700", mt: "8px" }}>Aditya Gupta</Typography><Typography sx={{ fontSize: { md: "18px", xs: '16px' }, fontWeight: "500", color: "#525252" }}>Design Guide</Typography></Grid>
                    <Grid item sx={{ background: "#00000014", backdrop: "filter(8px)", padding: "1rem", width: "220px", margin: "10px", borderRadius: "20px", boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}><img style= {{borderRadius:"50%"}} width="120px" src={SM}/><Typography sx={{ fontSize: { md: "20px", xs: '18px' }, fontWeight: "700", mt: "8px" }}>Sidarth M</Typography><Typography sx={{ fontSize: { md: "18px", xs: '16px' }, fontWeight: "500", color: "#525252" }}>Tech Guide</Typography></Grid>
                </Grid>
                <Typography sx={{ maxWidth: "750px", margin: "auto", marginTop: "10px" }}>Also, We would like to thank <strong>Robin Singh</strong>, <strong>Vidit Sharma</strong> and <strong>Shikhar Ahuja</strong> for their guidance, as without them this would not have been possible.</Typography>
            </Box>
        </>
    )
}

export default AboutPage