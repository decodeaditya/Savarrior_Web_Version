import { Divider, Typography, Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import AgencyCard from '../../Components/AgencyCard'
import {Button, colors } from '../../Theme'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../../Context/FirebaseData'
import arrow from "../../Assets/arrow.png"

const Agencies = () => {

    const {NgosList} = useContext(FirebaseContext)

    return (
        <Box sx={{ textAlign: "center", p: {md:"4rem 2rem",xs:"3rem 2.3rem"} }}>
            <Typography sx={{ fontWeight: "700", fontSize:{md:"30px",xs:'24px'}, letterSpacing: "-0.04rem", textTransform: "uppercase" }}>Connect with NGOs</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Explore NGOs Working For Animals</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <Grid container sx={{ justifyContent: "center", py: {md:"2rem",xs:"10px"} }}>
                {NgosList?.slice(0, 3).map((ngo) => (
                    <Grid item>
                        <AgencyCard agency={ngo} key={ngo.id} />
                    </Grid>
                ))}
            </Grid>
            <Link to="/ngos-and-people" style={{textDecoration:"none"}}>
            <Button variant="contained" sx={{mt:"1.2rem",p:"10px 15px",color:"black",background:"#fff",border:"2px solid grey"}}><img src={arrow} style={{width:"22px",marginRight:"10px",'&:hover':{background:"transparent"}}}/>See More NGOs</Button>
            </Link>
        </Box>
    )
}

export default Agencies