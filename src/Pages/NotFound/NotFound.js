import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
              
            <h1>Not Found</h1>
            <Link to="/"><Button type="submit" variant="contained" sx={{mx: 'auto', p: 1 , }} style={{backgroundColor: '#008CBA'}}>Go Back</Button></Link>
        
        </div>
    );
};

export default NotFound;