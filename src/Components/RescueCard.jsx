import { Person2Rounded, LocationOnRounded, Close } from '@mui/icons-material'
import { Typography, Box, Grid, Modal, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { colors, SquareButton, Button } from '../Theme'

const RescueCard = (props) => {


  const [mapOpen, setMapOpen] = useState(false)

  return (
    <React.Fragment>
      <Box sx={{
        width: { md: '380px', xs: "89vw" }, background: '#fff', overflow: 'hidden', borderRadius: "10px", transition: 'all 0.3s ease', textAlign: 'left',
        margin: '13px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        "&:hover": { boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px' }
      }}>
        <Box style={{ display: "flex" ,padding:"1rem"}}><img style={{ width: "40px",height:"40px", marginRight: "10px" }} src="https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg" /><Box>
          <Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: 500 }}>{props.rescue?.name} </Typography><Typography style={{fontSize:"13px",fontWeight:"500"}}>At {props.rescue?.time}, {props.rescue?.date}</Typography>
            </Box></Box>
        <div style={{
          margin: "1rem",
          marginBottom: 0,
          marginTop:0
        }}>

          <img src={props.rescue?.photoUrl} alt={props.rescue?.title} style={{
            height: '260px',
            width: '100%',
            objectFit: 'cover',
            transition: 'all 0.3s ease',
            borderRadius: "10px",
          }} />
        </div>
        <Box sx={{ p: '6px 14px' }}>
          <Typography sx={{ pb: "5px", fontWeight: "500", mb: "10px", color: colors.primary }} variant="h5" noWrap>{props.rescue?.title}</Typography>
          <Box style={{ display: "flex",borderRadius:"5px" }}><img style={{ height:"30px", marginRight: "3px" }} src="https://icons.veryicon.com/png/o/miscellaneous/small-yellow-icon/location-134.png" /><Typography sx={{ display: "flex", alignItems: "center", fontSize: "17px", fontWeight: 500 }}>{props.rescue?.location.formattedLocation}</Typography></Box>
        </Box>
        <Grid container sx={{ mt: "10px", padding: "1rem", paddingTop: 0 }}>
          <Button variant="contained" sx={{ width: "48%", marginLeft: "5px", textTransform: "capitalize",border:`1px solid ${colors.primary}`,background:"#3c726d" }} onClick={() => setMapOpen(true)}>View Map</Button>
          <Button variant="contained" sx={{ width: "48%", marginLeft: "5px", textTransform: "capitalize",border:`1px solid ${colors.primary}`,background:"#3c726d" }} href={`tel:${props.rescue?.phoneNumber}`}>Call</Button>
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
          <IconButton onClick={() => setMapOpen(false)} sx={{ position: "absolute", top: "10px", right: "10px", zIndex: "999", background: colors.primary, "&:hover": { background: colors.primary } }}>
            <Close sx={{ color: "#fff" }} />
          </IconButton>
          <Box sx={{ width: "100%", height: "100%", borderRadius: "5px", position: "relative" }} component="iframe" src={`https://maps.google.com/maps?q=${props.rescue?.location.coords.latitude},${props.rescue?.location.coords.longitude}&z=15&output=embed`} />
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default RescueCard