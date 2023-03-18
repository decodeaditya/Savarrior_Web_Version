import { Divider, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import AgencyCard from '../../Components/AgencyCard'
import { SquareButton, colors } from '../../Theme'
import { Link } from 'react-router-dom'


const Agencies = ({ngos}) => {
    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>Connect with NGOs</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help the Recent reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{ justifyContent: "center", py: "2rem" }}>
                {ngos.slice(0, 3).map((ngo) => (
                    <Grid item>
                        <AgencyCard agency={ngo} key={ngo.id} />
                    </Grid>
                ))}
            </Grid>
            <Link to="/ngos-and-people" style={{textDecoration:"none"}}>
                <SquareButton variant="contained" sx={{ mt: "1.2rem", p: "10px 15px", borderRadius: "4px" }}>Explore More NGOs</SquareButton>
            </Link>
        </Box>
    )
}

export default Agencies