import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        const url = `https://murmuring-ridge-38039.herokuapp.com/products?email=${user.email}`
        fetch (url)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2 sx={{ mb:1, p:1}}> My Orders:{products.length}</h2>
            <TableContainer component={Paper}>
      <Table  aria-label="Products table">
        <TableHead>
          <TableRow>
            <TableCell>Products Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">$ {row.price}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;