import { Search, SearchOutlined } from '@mui/icons-material'
import { Divider, Typography, Box, Grid, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import RescueCard from '../../Components/RescueCard'
import { SquareButton, colors } from '../../Theme'

const RescuePage = ({ RescuesList, url, setRescues }) => {

    const {id} = useParams()
    const [query, setQuery] = useState("")

    const search = (e) => {
        setQuery(e)
    }

    const filteredData = RescuesList.filter((r) => {
        //if no input the return the original
        if (query.toLowerCase() === '') {
            return r;
        }
        //return the item which contains the user input
        else{
            return `${r.name.toLowerCase()}${r.location[0].address.toLowerCase()}`.includes(query.toLowerCase())
        }
    })

    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem", mt: "3rem" }}>
            <Helmet>
                <title>Explore Rescues | {url}</title>
            </Helmet>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>Explore Rescues</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Help the Recent reported Rescues</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <TextField
                sx={{ width: { md: "70%", xs: "100%" }, pt: "10px" }}
                placeholder="Search Rescue by Name or Location" value={query} onChange={e => search(e.target.value)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    )
                }} />
            <Grid container sx={{ justifyContent: "center", py: "2rem" }}>
                {filteredData.length !== 0 && filteredData?.map((rescue) => (
                    <Grid item>
                        <RescueCard rescue={rescue} key={rescue.id} />
                    </Grid>
                ))
                }
                {filteredData.length === 0 && <>
                    <Box><Typography variant="h6">Sorry, No Rescue Found</Typography></Box>
                </>}
            </Grid>
        </Box>
    )
}

export default RescuePage