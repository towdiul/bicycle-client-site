import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BuyingModal from '../BuyingModal/BuyingModal';

const Product = ( buying) => {
    const {name, description, img, price} = buying.product;
    const [openBuying, setBuyingOpen] = React.useState(false);
  const handleBuyingOpen = () => setBuyingOpen(true);
  const handleBuyingClose = () => setBuyingOpen(false);
    return (
        <>
        <Grid item xs={4} sm={4} md={4} >
             <Card sx={{ minWidth: 275 , mt:1}}>
             <CardMedia
        component="img"
        style= {{ width:'auto', height: '250px', margin: '0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="h5"  sx={{ fontWeight: 500, mb : 2, color: '#008CBA'}} component="div">
            {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'warning.main'}} >
            Price: $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleBuyingOpen} sx={{mx: 'auto', p: 1}} style={{backgroundColor: '#008CBA'}} >Buy Now</Button>
      </CardActions>
    </Card>
      </Grid>
      <BuyingModal
      buying={buying}
      openBuying={openBuying}
      handleBuyingClose={handleBuyingClose }>
      </BuyingModal>
        </>
    );
};

export default Product;