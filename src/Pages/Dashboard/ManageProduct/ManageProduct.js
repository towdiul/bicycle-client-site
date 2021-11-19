import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect (() => {
        fetch('https://murmuring-ridge-38039.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://murmuring-ridge-38039.herokuapp.com/allProducts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
           
        })
    }
    return (
        <Box sx={{ flexGrow: 1, mb: 2}}>
            <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product =><div
                        key={product._id}
                           
                    >  <Grid item xs={4} sm={4} md={4}  >
                    <Card sx={{ minWidth: 275 , mt:1}}>
                    <CardMedia
               component="img"
               style= {{ width:'auto', height: '250px', margin: '0 auto'}}
               image={product.img}
               alt="green iguana"
             />
             <CardContent>
               
               <Typography variant="h5"  sx={{ fontWeight: 500, mb : 2, color: '#008CBA'}} component="div">
                   {product.name}
               </Typography>
               <Typography sx={{ mb: 1.5 }} color="text.secondary">
                   {product.description}
               </Typography>
               <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'warning.main'}} >
                   Price: $ {product.price}
               </Typography>
             </CardContent>
             <CardActions>
               <Button onClick={() => handleDelete(product._id)} variant="contained"  sx={{mx: 'auto', p: 1}} style={{backgroundColor: '#d11a2a'}} >Delete</Button>
             </CardActions>
           </Card>
             </Grid> </div> )
                }
            </Grid>
            </Container>

            </Box>
    );
};

export default ManageProduct;