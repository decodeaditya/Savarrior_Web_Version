import { Divider, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import AgencyCard from '../../Components/AgencyCard'
import { SquareButton, colors } from '../../Theme'

const AgencyPage = ({AgencyList}) => {
    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem",mt:"3rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem",textTransform:"uppercase" }}>NGOs and People</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Connect with Like Minded Groups and Friends</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{justifyContent:"center",py:"2rem"}}>
                {AgencyList?.map((agency) => (
                    <Grid item>
                        <AgencyCard agency={agency} key={agency.id}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default AgencyPage