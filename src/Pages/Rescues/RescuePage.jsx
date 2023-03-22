import { Divider, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import RescueCard from '../../Components/RescueCard'
import { SquareButton, colors } from '../../Theme'

const RescuePage = ({RescuesList}) => {
    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem",mt:"3rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem",textTransform:"uppercase" }}>Explore Rescues</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help the Recent reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{justifyContent:"center",py:"2rem"}}>
                {RescuesList?.map((rescue) => (
                    <Grid item>
                        <RescueCard rescue={rescue} key={rescue.id}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default RescuePage