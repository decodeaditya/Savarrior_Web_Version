import { Typography, Box, Grid,} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors, Button } from '../Theme'

const AgencyCard = (props) => {

  const slug = props.agency.name.trim().toLowerCase().split(' ').join('-')

  return (
    <Box sx={{
      width: {md:'380px',xs:"89vw"}, background: '#fff', overflow: 'hidden', transition: 'all 0.3s ease', textAlign: 'left',
      margin: '13px',
      borderRadius:"8px",
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      "&:hover": { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }
    }}>
        <div style={{
          margin: "1rem",
          marginBottom: 0,
        }}>

      <img src={props.agency.images.img1} alt={props.agency.name} style={{
       height: '260px',
       width: '100%',
       objectFit: 'cover',
       transition: 'all 0.3s ease',
       borderRadius: "10px",
      }} />
        </div>
      <Box sx={{ p: '6px 14px' }}>
        <Typography sx={{ pb: "5px",fontWeight:"600",mb:"10px",color:colors.primary,fontSize:"20px",padding:"2px" }} >{props.agency.name}</Typography>
        <Box style={{ display: "flex",borderRadius:"5px" }}><img style={{ height:"30px", marginRight: "3px" }} src="https://icons.veryicon.com/png/o/miscellaneous/small-yellow-icon/location-134.png" /><Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: 500 ,  overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",}}>{props.agency?.location}</Typography></Box>
      </Box>
      <Grid container sx={{mt: "10px", padding: "1rem", paddingTop: 0 }}>
        <Link style={{width:"100%",textDecoration:"none"}} to={`/ngo/${slug}/${props.agency.id}/`}> <Button variant="contained" sx={{ width:"100%", textTransform: "capitalize",border:`1px solid ${colors.primary}`,background:"#3c726d", }} >View</Button></Link>
      </Grid>
    </Box>
  )
}

export default AgencyCard