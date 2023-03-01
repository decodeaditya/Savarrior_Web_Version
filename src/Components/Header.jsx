import { AppBar, Box, Toolbar, Typography,IconButton } from '@mui/material'
import { Button } from '../Theme'
import { Container } from '@mui/system'
import React from 'react'
import { Person } from '@mui/icons-material'

const Header = () => {
    return (
        <Box>
            <AppBar sx={{ background: "#fff", boxShadow: "none" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ color: "#5f5f5f" }}>
                        <Typography variant="h5" sx={{ fontWeight: "800" }}> <span style={{ color: "#329c92" }}>SAVA</span>RRIOR</Typography>
                        <IconButton variant='contained'><Person/></IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header