import { Typography } from '@mui/material';
import React from 'react';

const WatchProduct = () => {
    return (
        <div>
             <Typography variant="h4" sx={{ fontWeight: 450,   p:1 , }} component="div">
              <span style={{color:'#008CBA'}}>Watch</span> Now
                <hr className="w-50 mx-auto" style={{ backgroundColor: '#008CBA'}}/>
        </Typography>
        <iframe width="75%"  height="450" src="https://www.youtube.com/embed/Wqcmh-tBmnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
    );
};

export default WatchProduct;