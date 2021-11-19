import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ban from '../../../images/ban.png';
import bg from '../../../images/bg.jpg';
import { Button, Container,  Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500
}

const Banner = () => {
    return (
         <Container  sx={{ flexGrow: 1  }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
            <Box>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
                Happy Shopping <br/>
                <span style={{color:'#008CBA'}}>Choose Your Bike</span>
            </Typography>
            <Typography variant="h6" sx={{ my:3 , fontSize: 14, fontWeight: 300, color: 'gray'}}>
            Find Bicycle Adventures. Unlimited Access. 100% Secure. Always Facts.On a standard bicycle the wheels are mounted in-line in a metal frame, with the front wheel held in a rotatable fork.
            </Typography>
            <NavLink to="/products" style={{textDecoration: 'none'}}><Button variant="contained" sx={{mx: 'auto', p: 1}} style={{backgroundColor: '#008CBA'}}>Explore Now</Button></NavLink>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
            <img style= {{width: '500px'}} src={ban} alt="" />
         
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;