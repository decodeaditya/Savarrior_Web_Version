import { Person2Rounded, LocationOnRounded, Close } from '@mui/icons-material'
import { Typography, Box, Grid, Modal, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { colors, SquareButton } from '../Theme'

const RescueCard = (props) => {


  const [mapOpen, setMapOpen] = useState(false)

  return (
    <React.Fragment>
      <Box sx={{
        width: { md: '380px', xs: "89vw" }, background: '#fff', overflow: 'hidden', borderRadius: "8px", transition: 'all 0.3s ease', textAlign: 'left',
        margin: '13px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        "&:hover": { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }
      }}>
        <img src={props.rescue?.photoUrl} alt={props.rescue?.title} style={{
          height: '260px',
          width: '100%',
          objectFit: 'cover',
          transition: 'all 0.3s ease',
        }} />
        <Box sx={{ p: '6px 14px' }}>
          <Typography sx={{ pb: "5px", fontWeight: "500", mb: "10px", color: colors.primary }} variant="h5" noWrap>{props.rescue?.title}</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}><Person2Rounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />{props.rescue?.name}</Typography>
          <Typography sx={{ display: "flex", mt: "10px", alignItems: "center", fontSize: "18px", width: "100%" }} wrap><LocationOnRounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />{props.rescue?.location.formattedLocation}</Typography>
        </Box>
        <Grid container sx={{ mt: "10px" }}>
          <SquareButton variant="contained" sx={{ width: "50%", borderRight: "1px solid #f1f1f1", }} onClick={() => setMapOpen(true)}>GET LOCATION</SquareButton>
          <SquareButton variant="contained" sx={{ width: "50%" }} href={`tel:${props.rescue?.phoneNumber}`}>CONNECT</SquareButton>
        </Grid>
      </Box>

      <Modal
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >

        <Box sx={{ position: "relative", width: { md: "70%", xs: '90%' }, height: { md: "70%", xs: "90%" }, borderRadius: "5px", }}>
          <IconButton onClick={()=>setMapOpen(false)} sx={{ position: "absolute", top: "10px", right: "10px",zIndex:"999",background:colors.primary,"&:hover":{background:colors.primary} }}>
            <Close sx={{color:"#fff"}}/>
          </IconButton>
          <Box sx={{ width: "100%", height: "100%", borderRadius: "5px", position: "relative" }} component="iframe" src={`https://maps.google.com/maps?q=${props.rescue?.location.coords.latitude},${props.rescue?.location.coords.longitude}&z=15&output=embed`} />
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default RescueCard