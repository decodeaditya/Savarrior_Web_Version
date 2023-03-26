import { SearchOutlined } from '@mui/icons-material'
import { Divider, Typography, Box, Grid, TextField, InputAdornment } from '@mui/material'
import React, { useState,useContext } from 'react'
import { Helmet } from 'react-helmet'
import AgencyCard from '../../Components/AgencyCard'
import { FirebaseContext } from '../../Context/FirebaseData'
import { colors } from '../../Theme'

const AgencyPage = ({ url }) => {

    const [query, setQuery] = useState("")
    const {NgosList} = useContext(FirebaseContext)

    const search = (e) => {
        setQuery(e)
    }

    const filteredData = NgosList.filter((r) => {
        if (query.toLowerCase() === '') {
            return r;
        }
        else {
            return `${r.name.toLowerCase()}${r.location.toLowerCase()}`.includes(query.toLowerCase())
        }
    })

    return (
        <Box sx={{ textAlign: "center", p: "5rem 2rem", mt: "3rem" }}>
            <Helmet>
                <title>NGOs and People | {url}</title>
            </Helmet>
            <Typography variant="h4" sx={{ fontWeight: "800", letterSpacing: "-0.04rem", textTransform: "uppercase" }}>NGOs and People</Typography>
            <Typography variant="body1" sx={{ my: "5px", fontWeight: "400", fontSize: "18px" }}>Connect with Like Minded Groups and Friends</Typography>
            <Divider sx={{ width: "80px", margin: "auto", height: '4px', my: "1rem", background: colors.primary }} />
            <TextField
                sx={{ width: { md: "70%", xs: "100%" }, pt: "10px" }}
                placeholder="Search NGOs and People Nearby" value={query} onChange={e => search(e.target.value)} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlined />
                        </InputAdornment>
                    )
                }} />
            <Grid container sx={{ justifyContent: "center", py: "2rem" }}>
                {filteredData.length !== 0 && filteredData?.map((agency) => (
                    <Grid item>
                        <AgencyCard agency={agency} key={agency.id} />
                    </Grid>
                ))}
                {filteredData.length === 0 && <>
                    <Box><Typography variant="h6">Sorry, No NGO found</Typography></Box>
                </>}
            </Grid>
        </Box>
    )
}

export default AgencyPage