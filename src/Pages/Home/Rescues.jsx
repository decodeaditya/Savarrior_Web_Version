import { Person3Rounded } from '@mui/icons-material'
import { Divider, Typography, Box, Grid } from '@mui/material'
import React from 'react'
import RescueCard from '../../Components/RescueCard'
import { SquareButton,Button, colors } from '../../Theme'

const RescuesList = [
    {
        title: "Save This Piglet",
        img: "https://www.mkewithkids.com/wp-content/uploads/2022/10/Pink-piglet-1-1024x658.jpg",
        name: "Sid Vats",
        location: "Parade Ground Prayagraj - 212343"
    },
    {
        title: "Help this Dog with Tumour",
        img: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsJTIwaGVhbHRofGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name: "Atik Ahmed",
        location: "Parade Ground Prayagraj - 212343"
    },
    {
        title: "Help Cows Of Uttrakhand",
        img: "https://www.anipixels.com/photos/c7d3a7ae-c88e-4a30-92b7-194310b14ae4-f.jpg",
        name: "Aditya",
        location: "Parade Ground Prayagraj - 212343"
    },
]

const Rescues = () => {
    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem" }}>
            <Typography variant="h4" sx={{ fontWeight: "700", letterSpacing: "-0.04rem" }}>Rescues Need Your Help</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help the Recent reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{justifyContent:"center",py:"2rem"}}>
                {RescuesList.map((rescue) => (
                    <Grid item>
                        <RescueCard rescue={rescue} />
                    </Grid>
                ))}
            </Grid>
            <SquareButton variant="contained" sx={{mt:"1.2rem",p:"10px 15px",borderRadius:"4px"}}>Explore More Rescues</SquareButton>
        </Box>
    )
}

export default Rescues