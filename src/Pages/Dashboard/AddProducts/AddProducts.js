import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';


    
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://murmuring-ridge-38039.herokuapp.com/allProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                
            })
    }

    return (
        <div className="add-product">
            <h2 p-2>Please Add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <Button className="color-submit " type='submit' variant="contained" >Submit</Button>
            </form>
        </div>
    );
};

export default AddProducts;