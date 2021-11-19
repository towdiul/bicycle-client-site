
import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import login from '../../../images/login.png'
import Navigation from '../../../Shared/Navigation/Navigation';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            
                alert('Your password is did not match')
                return
            
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
        
    <Container sx={{mt:1, mb:1, p:3}}>
        
          <Grid container spacing={2}>
    <Grid item sx={{ mt: 8}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
            Register
        </Typography>
       { !isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{ width: '75%', m: 1}}
            id="standard-basic"
            label="Your Name" 
            
            name="name"
            onBlur={handleOnBlur}
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1}}
            id="standard-basic"
            label="Your Email" 
            type= "email"
            name="email"
            onBlur={handleOnBlur}
            variant="standard" />
        
            <TextField 
            sx={{ width: '75%', m: 1}}
            id="standard-basic"
            label="Your Password"
            type="password" 
            name="password"
            onBlur={handleOnBlur}
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1}}
            id="standard-basic"
            label="Re Password"
            type="password" 
            name="password2"
            onBlur={handleOnBlur}
            variant="standard" />
            
            <Button variant="contained" type="submit" sx={{width: '75%', m: 1, p: 1}} style={{backgroundColor: '#008CBA'}} 
            >Register</Button>
            <NavLink Style={{textDecoration: 'none' }} to="/login" >
                <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
  
        </form>}
        {isLoading && <CircularProgress/>}
        {user?.email && <Alert severity="success"> created successfully!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
    </Grid>
    <Grid item xs={12} md={6}>
        <img style={{width:'100%'}} src={login}></img>
    </Grid>
   
  </Grid>
    </Container>
    <Footer></Footer>
    </>
    );
};

export default Register;