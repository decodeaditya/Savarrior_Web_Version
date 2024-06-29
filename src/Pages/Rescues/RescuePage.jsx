import {  SearchOutlined } from '@mui/icons-material'
import {  Typography, Box, Grid, TextField, InputAdornment, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import RescueCard from '../../Components/RescueCard'
import { FirebaseContext } from '../../Context/FirebaseData'
import headImg from '../../Assets/header.jpg'

const RescuePage = ({ url }) => {

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
        marginTop: "5rem",
        ['&::before']: {
            content: '""',
            background: `url(${headImg}) center`,
            zIndex: '-1',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: '0.4',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundSize: 'cover'
        }
    }))

    const { RescuesList } = useContext(FirebaseContext)

    const { id } = useParams()
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
        else {
            return `${r.name?.toLowerCase()}${r.location.formattedLocation?.toLowerCase()}`.includes(query.toLowerCase())
        }
    })

    return (
           <>
            <Subscribe container>
                <Typography variant="h4" sx={{ fontWeight: "700",textTransform: "uppercase" }}>Explore Rescues</Typography>
            </Subscribe>
        <Box sx={{ textAlign: "center", p: "5rem 2rem", pt:"2rem" }}>
            <Helmet>
                <title>Rescues - Savarrior</title>
            </Helmet>
            <TextField
                sx={{  "& fieldset": { border: 'none' },width: { md: "70%", xs: "100%" },background:"#dddddd78",borderRadius:"30px",border:"1px solid gray",outline:"none" }}
                placeholder="Search Here..." value={query} onChange={e => search(e.target.value)} InputProps={{
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
           </>
    )
}

export default RescuePage