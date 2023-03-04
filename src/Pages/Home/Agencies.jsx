import { Divider, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import AgencyCard from '../../Components/AgencyCard'
import { SquareButton, colors } from '../../Theme'

const AgencyList = [
    {
        title: "Peepal Farm",
        img: "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/07/11133724/110717_peepalfarm7.jpg",
        services: ['Adoption','Sterization'],
        location: "Kangra, Himachal Pradesh - India"
    },
    {
        title: "Save A Stray",
        img: "https://static01.nyt.com/images/2019/08/29/upshot/00up-euthanasia6/merlin_159833583_0b127050-ce58-4fba-a6d0-72a424687691-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        services: ['Adoption','Sterization','Foster'],
        location: "Gautam Buddha Nagar, Delhi - India"
    },
    {
        title: "Animal Aid Unlimited",
        img: "https://i.ytimg.com/vi/8uay1F9aVH8/maxresdefault.jpg",
        services: ['Foster','Sterization'],
        location: "Udaipur, Rajasthan - India"
    },
]

const Agencies = () => {
    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem",textTransform:"uppercase" }}>Connect with NGOs</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help the Recent reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{justifyContent:"center",py:"2rem"}}>
                {AgencyList.map((agency) => (
                    <Grid item>
                        <AgencyCard agency={agency} />
                    </Grid>
                ))}
            </Grid>
            <SquareButton variant="contained" sx={{mt:"1.2rem",p:"10px 15px",borderRadius:"4px"}}>Explore More NGOs</SquareButton>
        </Box>
    )
}

export default Agencies