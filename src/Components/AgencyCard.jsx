import { LocationOnRounded,MiscellaneousServices } from '@mui/icons-material'
import { Typography, Box, Grid, Stack, Chip, } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { colors, SquareButton } from '../Theme'

const AgencyCard = (props) => {

  const slug = props.agency.name.toLowerCase().split(' ').join('-')

  return (
    <Box sx={{
      width: {md:'380px',xs:"89vw"}, background: '#fff', overflow: 'hidden', transition: 'all 0.3s ease', textAlign: 'left',
      margin: '13px',
      borderRadius:"8px",
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
      "&:hover": { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }
    }}>
      <img src={props.agency.images.img1} alt={props.agency.name} style={{
        height: '260px',
        width: '100%',
        objectFit: 'cover',
        transition: 'all 0.3s ease',
      }} />
      <Box sx={{ p: '6px 14px' }}>
        <Typography sx={{ pb: "5px",fontWeight:"500",mb:"10px",color:colors.primary }} variant="h5" noWrap>{props.agency.name}</Typography>
        <Typography sx={{display:"flex",mt:"10px",alignItems:"center",fontSize:"18px"}}><MiscellaneousServices sx={{color:colors.primaryicons, borderRadius: "50%", p: "5px",mr:"7px", border: `2px solid ${colors.primary}` }} />        <Stack direction="row" useFlexGap flexWrap="wrap">
            {props.agency.services?.map((service)=>(
                <Chip label={service} key={service} color="success" variant="outlined" size="small" sx={{m:'1.9px'}}/>
            ))}
        </Stack></Typography>
        <Typography sx={{display:"flex",mt:"10px",alignItems:"center",fontSize:"18px", textOverflow: 'ellipsis',
    }} noWrap ><LocationOnRounded sx={{color:colors.primaryicons, borderRadius: "50%", p: "5px",mr:"7px", border: `2px solid ${colors.primary}` }} />{props.agency.location}</Typography>
      </Box>
      <Grid container sx={{mt:"10px"}}>
        <Link style={{width:"100%",textDecoration:"none"}} to={`/ngo/${slug}/${props.agency.id}`}><SquareButton variant="contained" sx={{width:"100%"}} >LEARN MORE</SquareButton></Link>
      </Grid>
    </Box>
  )
}

export default AgencyCard