import { CallMadeRounded, LocationOnRounded } from '@mui/icons-material'
import { Grid, Box, Typography, Divider, Chip } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { colors, Button } from '../../Theme'
import {db} from '../../firebase'
import { doc, onSnapshot } from "firebase/firestore";

const SingleAgency = () => {


  const { id, slug } = useParams()
  const [ngo,setNgo] = useState({})

  useEffect(() => {
    const ngo = onSnapshot(doc(db, "registeredNGOs", id), (doc) => {
      doc.exists()&&setNgo(doc.data())
  })
  return () => {
      ngo()
  }
  },[id])


  return (
    <Grid container sx={{ marginTop: "5rem", padding: "3rem 1rem", justifyContent: "center" }}>
      <Grid item sx={{ width: { md: "50%", xs: "100%" } }}>
        <img src={ngo.ngoImage} width={'100%'} style={{ borderRadius: "6px" }} />
      </Grid>
      <Grid item sx={{ width: { md: "40%", xs: "100%" }, px: { md: "1rem", xs: "0" }, pl: { md: "2rem", xs: "0" }, mt: { md: 0, xs: "1rem" } }}>
        <Box sx={{ background: "#f1f1f1", p: "10px", borderRadius: "5px" }}>
          <Typography variant="h4" sx={{ fontWeight: "700", textTransform: "uppercase" }}>{ngo.name}</Typography>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center", fontWeight: "600" }}><LocationOnRounded sx={{ mr: "7px" }} />{ngo.location}</Typography>
        </Box>
        <Typography variant="h6" sx={{ mt: "2rem", fontWeight: "700", textTransform: "uppercase" }}>How They Can Help You</Typography>
        <Divider sx={{ width: "80px", height: '4px', my: "1rem", background: colors.primary }} />
        {ngo.services?.map((ser)=>(
          <Chip label={ser} sx={{ mr: "4px", fontSize: "15px" }} variant="filled" color="success" key={ser}/>
        ))}
        <Typography variant="h6" sx={{ mt: "2rem", fontWeight: "700", textTransform: "uppercase" }}>Contact {ngo.name}</Typography>
        <Divider sx={{ width: "80px", height: '4px', my: "1rem", background: colors.primary }} />
        <Typography sx={{ display: "flex", mt: "10px", alignItems: "center", fontSize: "18px" }}><CallMadeRounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />{ngo.phone}</Typography>
        <Typography sx={{ display: "flex", mt: "10px", alignItems: "center", fontSize: "18px" }}><LocationOnRounded sx={{ color: colors.primaryicons, borderRadius: "50%", p: "5px", mr: "7px", border: `2px solid ${colors.primary}` }} />(123) 456-7890</Typography>
        <Button variant="contained" sx={{ marginTop: "1.5rem" }}>Need Help?</Button>
      </Grid>
    </Grid>
  )
}

export default SingleAgency