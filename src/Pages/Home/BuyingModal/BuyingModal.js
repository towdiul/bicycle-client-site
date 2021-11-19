import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { PriceCheck } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BuyingModal = ({openBuying, handleBuyingClose, buying }) => {
    const {name, price , img} = buying.product;
    const {user} = useAuth();
    const initialInfo = {customerName: user.displayName, email: user.email, address:'', phone:''}

    const [buyingInfo, setBuyingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...buyingInfo };
      newInfo[field] = value;
      
      setBuyingInfo(newInfo);
    }

    const handleBuyingSubmit = e => {
      const product = {
        ...buyingInfo,
        price,
        img,
        productName: name,
        
        


      }
      
      fetch('https://murmuring-ridge-38039.herokuapp.com/products', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
      })
      handleBuyingClose();
      e.preventDefault();
    }
    return (
        <Modal
        open={openBuying}
        onClose={handleBuyingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{ mb:1}} component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBuyingSubmit}>
          <TextField
            
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            name="customerName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
        />
          <TextField
            
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue= {user.email}
            size="small"
        />
          <TextField
            disabled
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            defaultValue={name}
            size="small"
        />
          <TextField
            disabled
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            defaultValue={price}
            size="small"
        />
          <TextField
            
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            name="address"
            onBlur={handleOnBlur}
            defaultValue="Address"
            size="small"
        />
          <TextField
            
            sx={{width: '90%', m: 1}}
            id="outlined-size-small"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue="Phone Number"
            size="small"
        />
         <Button type="submit" variant="contained" sx={{mx: 'auto', p: 1 , }} style={{backgroundColor: '#008CBA'}}>Submit</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default BuyingModal;