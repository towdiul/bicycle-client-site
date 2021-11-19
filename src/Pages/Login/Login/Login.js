import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Link, TextField, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import login from '../../../images/login.png'
import Navigation from '../../../Shared/Navigation/Navigation';
import { NavLink , useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
            loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <>
            
        <Container sx={{mt:1, mb:1, p:5}}>
            
              <Grid container spacing={2}>
        <Grid item sx={{ mt: 8}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{ width: '75%', m: 1}}
                id="standard-basic"
                label="Your Email" 
                name="email"
                onBlur={handleOnChange}
                variant="standard" />
            
                <TextField 
                sx={{ width: '75%', m: 1}}
                id="standard-basic"
                label="Your Password"
                type="password" 
                name="password"
                onBlur={handleOnChange}
                variant="standard" />
                
                <Button variant="contained" type="submit" sx={{width: '75%', m: 1, p: 1}} style={{backgroundColor: '#008CBA'}} 
                >Login</Button>
                <NavLink Style={{textDecoration: 'none' }} to="/register" >
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress/>}
        {user?.email && <Alert severity="success"> Login successfully!</Alert>}
        
      
            </form>
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

export default Login;