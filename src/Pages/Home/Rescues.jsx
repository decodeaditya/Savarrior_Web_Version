import { Divider, Typography, Box, Grid } from '@mui/material'
import React, { useContext } from 'react'
import RescueCard from '../../Components/RescueCard'
import { Button, colors } from '../../Theme'
import { Link } from 'react-router-dom'
import { path } from '../../path'
import { FirebaseContext } from '../../Context/FirebaseData'
import arrow from "../../Assets/arrow.png"


const Rescues = () => {
    const {RescuesList} = useContext(FirebaseContext)
    return (
        <Box sx={{ textAlign: "center", p: {md:"4rem 2rem",xs:"3rem 2.3rem"} }}>
            <Typography sx={{ fontSize:{md:"30px",xs:'25px'},fontWeight: "700", letterSpacing: "-0.04rem",textTransform:"uppercase" }}>Recent Rescues</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help Recently reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "0.8rem", background: colors.primary }} />
            <Grid container sx={{justifyContent:"center",py:{md:"2rem",xs:"10px"}}}>
                {RescuesList?.slice(0,3).map((rescue) => (
                    <Grid item>
                        <RescueCard rescue={rescue} key={rescue.id}/>
                    </Grid>
                ))}
            </Grid>
            <Link to={path.rescue} style={{textDecoration:"none"}}> <Button variant="contained" sx={{mt:"1.2rem",p:"10px 15px",color:"black",background:"#fff",border:"2px solid grey"}}><img src={arrow} style={{width:"22px",marginRight:"10px",'&:hover':{background:"transparent"}}}/>See More Rescues</Button></Link>
        </Box>
    )
}

export default Rescues