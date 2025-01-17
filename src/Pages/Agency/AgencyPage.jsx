import { SearchOutlined } from '@mui/icons-material'
import { Divider, Typography, Box, Grid, TextField, InputAdornment, styled } from '@mui/material'
import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import AgencyCard from '../../Components/AgencyCard'
import { FirebaseContext } from '../../Context/FirebaseData'
import headImg from '../../Assets/header.jpg'

const AgencyPage = () => {

    const Subscribe = styled(Grid)((props) => ({
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundSize: 'cover',
        textDecoration: 'none',
        background: '#000',
        color: 'white',
        fontSize: '20px',
        minHeight: '200px',
        padding: '20px 2rem',
        position: 'relative',
        margin: '0',
        lineHeight: '1.4',
        zIndex: '1',
        justifyContent: "center",
        ['&::before']: {
            content: '""',
            background: `url(${headImg}) center`,
            zIndex: '-1',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: '0.6',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'cover'
        }
    }))

    const [query, setQuery] = useState("")
    const { NgosList } = useContext(FirebaseContext)

    const search = (e) => {
        setQuery(e)
    }

    const filteredData = NgosList.filter((r) => {
        if (query.toLowerCase() === '') {
            return r;
        }
        else {
            return `${r?.name?.toLowerCase()}${r?.location?.toLowerCase()}`.includes(query.toLowerCase())
        }
    })

    return (
        <>
            <Box sx={{ paddingTop: { md: "5rem", xs: "4.5rem" } }} />
            <Subscribe container>
                <Typography variant="h4" sx={{ fontWeight: "700", textTransform: "uppercase" }}>NGOs and People</Typography>
            </Subscribe>
            <Box sx={{ textAlign: "center", p: "5rem 2rem", pt: "2rem" }}>
                <Helmet>
                    <title>NGOs and People - Savarrior</title>
                </Helmet>
                <TextField
                    sx={{ "& fieldset": { border: 'none' }, width: { md: "70%", xs: "100%" }, background: "#dddddd78", borderRadius: "30px", border: "1px solid gray", outline: "none" }}
                    placeholder="Search NGOs Nearby" value={query} onChange={e => search(e.target.value)} InputProps={{
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
        </>
    )
}

export default AgencyPage