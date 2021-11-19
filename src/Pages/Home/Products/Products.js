import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import Navigation from '../../../Shared/Navigation/Navigation';




const Products = () => {
    const [products, setProducts] = useState([])
    useEffect (() => {
        fetch('https://murmuring-ridge-38039.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            
        <Box sx={{ flexGrow: 1 , mb: 2}}>
            <Container>
            <Typography variant="h4" sx={{ fontWeight: 450,   p:2 , mt: 1 }} component="div">
              <span style={{color:'#008CBA'}}>Our</span> Products
                
        </Typography>
        
        
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product =><Product
                        key={product.name}
                        product={product}
                    ></Product> )
                }
            </Grid>
            </Container>
    </Box>
        </>
        
    );
};

export default Products;