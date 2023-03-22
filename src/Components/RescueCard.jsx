import { Person2Rounded, LocationOnRounded } from '@mui/icons-material'
import { Typography, Box, Grid, Modal } from '@mui/material'
import React, { useState } from 'react'
import { colors, SquareButton } from '../Theme'

const RescueCard = (props) => {


  const [mapOpen, setMapOpen] = useState(false)

  return (
    <React.Fragment>
      <Box sx={{
        width: { md: '380px', xs: "90vw" }, background: '#fff', overflow: 'hidden', borderRadius: "8px", transition: 'all 0.3s ease', textAlign: 'left',
        margin: '13px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        "&:hover": { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }
      }}>
        <img src={props.rescue?.img} alt={props.rescue?.title} style={{
          height: '260px',
          width: '100%',
          objectFit: 'cover',
          transition: 'all 0.3s ease',
        }} />
        <Box sx={{ p: '6px 14px' }}>
          <Typography sx={{ pb: "5px", fontWeight: "500", mb: "10px", color: colors.primary }} variant="h5" noWrap>{props.rescue?.title}</Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "18px" }}><Person2Rounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />{props.rescue?.name}</Typography>
          <Typography sx={{ display: "flex", mt: "10px", alignItems: "center", fontSize: "18px", width: "100%" }} noWrap><LocationOnRounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />{props.rescue?.location[0].address}</Typography>
        </Box>
        <Grid container sx={{ mt: "10px" }}>
          <SquareButton variant="contained" sx={{ width: "50%", borderRight: "1px solid #f1f1f1", }} onClick={() => setMapOpen(true)}>GET LOCATION</SquareButton>
          <SquareButton variant="contained" sx={{ width: "50%" }} href={`tel:${props.rescue?.phone}`}>CONNECT</SquareButton>
        </Grid>
      </Box>

      <Modal
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >

        <Box sx={{ width: { md: "70%", xs: '90%' }, height: { md: "70%", xs: "90%" }, borderRadius: "5px", }}> <iframe width="100%" title={props.rescue?.id} height="100%" position="relative" frameBorder="0" marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?q=${props.rescue?.location[1].coords[0].latitude},${props.rescue?.location[1].coords[1].longitude}&z=15&output=embed`}></iframe></Box>
      </Modal>
    </React.Fragment>
  )
}

export default RescueCard