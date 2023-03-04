import React from 'react'
import { Grid, Typography, Divider, Box } from '@mui/material'
import { Button, colors } from '../../Theme'
import Joinimg from '../../Assets/Join.jpg'

const Join = () => {
  return (
    <Box sx={{background: "#f1f1f1", p: "5rem 2rem" ,textAlign:"center"}}>
      <Typography variant="h4" sx={{ fontWeight: "700", letterSpacing: "-0.04rem" }}>Join Our Crew</Typography>
      <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Join Us and Let's Create a Great Impact</Typography>
      <Divider sx={{ width: "80px",margin:"auto", height: '4px', my: "1rem", background: colors.primary }} />
      <Grid container sx={{justifyContent:"center",py:"2rem",maxWidth: "89%",margin:"auto",alignItems:"center"}}>
        <Grid item sx={{ width: "50%" }}>
          <img src={Joinimg} width="100%" alt="Join Us" style={{
            borderRadius:"5px"
          }}/>
        </Grid>
        <Grid item sx={{ width: "50%" ,textAlign:"left",p:"10px 20px"}}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ducimus, sint illo distinctio ex
            numquam minima, quisquam vero accusantium suscipit illum quam magni,
            alias vel quibusdam odit iste hic error!
          </Typography>

          <Button variant="contained">Individual</Button>
          <Button variant="contained">Individual</Button>
          <Button variant="contained">Individual</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Join