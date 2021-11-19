import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Products from '../Products/Products';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect (() => {
        fetch('https://murmuring-ridge-38039.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const sliced = products.slice(0,6);
    console.log(sliced)
    return (
        <Box sx={{ flexGrow: 1 , mb: 2}}>
            <Container>
           
            <Typography variant="h4" sx={{ fontWeight: 450,   p:1 , }} component="div">
              <span style={{color:'#008CBA'}}>Our</span> Best Products
                <hr className="w-50 mx-auto" style={{ backgroundColor: '#008CBA'}}/>
        </Typography>
        
        
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    sliced.map(product =><Product
                        key={product.name}
                        product={product}
                    ></Product> )
                }
            </Grid>
            </Container>
    </Box>
    );
};

export default HomeProducts;