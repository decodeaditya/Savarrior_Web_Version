import { LocationOnRounded } from '@mui/icons-material'
import { Grid, Box, Typography, Divider, Chip } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { SingleAgencyList } from '../../Data/SingleAgency'
import { colors,Button } from '../../Theme'

const SingleAgency = () => {


  const { slug, id } = useParams()
  const agencyName = slug.replace("-", " ")

  return (
    <Grid container sx={{ marginTop: "5rem", padding: "3rem 1rem", justifyContent: "center" }}>
      <Grid item sx={{ width: {md:"50%",xs:"100%"} }}>
        <img src="https://smedia2.intoday.in/indiatoday/images/stories/2017November/peepalpersonsone_113017083531.jpg" width={'100%'} style={{ borderRadius: "6px" }} />
      </Grid>
      <Grid item sx={{ width: {md:"40%",xs:"100%"}, px: {md:"1rem",xs:"0"}, pl: {md:"2rem",xs:"0"} ,mt:{md:0,xs:"1rem"} }}>
        <Box sx={{ background: "#f1f1f1", p: "10px", borderRadius: "5px" }}>
          <Typography variant="h4" sx={{ fontWeight: "700", textTransform: "uppercase" }}>{agencyName}</Typography>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}><LocationOnRounded sx={{ mr: "7px" }} />Kangra Himachal Pradesh, India</Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: "2rem", fontWeight: "700", textTransform: "uppercase" }}>How They Can Help You</Typography>
        <Divider sx={{ width: "80px", height: '4px', my: "1rem", background: colors.primary }} />
        <Chip label="Adoption" sx={{ mr: "4px", fontSize: "15px" }} variant="filled" color="success" />
        <Chip label="Adoption" sx={{ mr: "4px", fontSize: "15px" }} variant="filled" color="success" />
        <Chip label="Adoption" sx={{ mr: "4px", fontSize: "15px" }} variant="filled" color="success" />
        <Chip label="Adoption" sx={{ mr: "4px", fontSize: "15px" }} variant="filled" color="success" />
        <Typography variant="h6" sx={{ mt: "2rem", fontWeight: "700", textTransform: "uppercase" }}>Contact {agencyName}</Typography>
        <Divider sx={{ width: "80px", height: '4px', my: "1rem", background: colors.primary }} />
        <Typography sx={{display:"flex",mt:"10px",alignItems:"center",fontSize:"18px"}}><LocationOnRounded sx={{color:colors.primaryicons, borderRadius: "50%", p: "5px",mr:"7px", border: `2px solid ${colors.primary}` }} />(123) 456-7890</Typography>
        <Typography sx={{display:"flex",mt:"10px",alignItems:"center",fontSize:"18px"}}><LocationOnRounded sx={{color:colors.primaryicons, borderRadius: "50%", p: "5px",mr:"7px", border: `2px solid ${colors.primary}` }} />(123) 456-7890</Typography>
        <Button variant="contained" sx={{marginTop:"1.5rem"}}>Need Help?</Button>
      </Grid>
    </Grid>
  )
}

export default SingleAgency