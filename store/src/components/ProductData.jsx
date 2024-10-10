// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../Redux/Product_slice';
// const SmartphonePage = ({ addToCart }) => { 
//     const dispatch=useDispatch();
//     const smartphones=useSelector(state=>state.products)
//   useEffect(()=>{
//   dispatch(fetchData())
  
//   }, [dispatch])
//   console.log(smartphones)
// // };

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Product_slice.js';  // Ensure the path is correct


export const productData = {
    laptops: [
      {
        id: 'laptop1',
        imageKey: "laptop",  
        productName: "Laptop 1",
        price: 850.00,
        rating: 4,
      },
      {
        id: 'laptop2',
        imageKey: "laptop2",
        productName: "Laptop 2",
        price: 1200.00,
        rating: 5,
      },
    //   // Add more laptops here...
    ],
    smartphones: [
      {
        id: 'mobile1',
        imageKey: "mobile",  
        productName: "Mobile 1",
        price: 500.00,
        rating: 4,
      },
      {
        id: 'mobile2',
        imageKey: "smartphone",
        productName: "Mobile 2",
        price: 750.00,
        rating: 5,
      },
    //   // Add more mobiles here...
     ],
 cameras: [
        {
          id: 'camera1',
          imageKey: "cam",  
          productName: "Camera 1",
          price: 500.00,
          rating: 4,
        },
        {
          id: 'camera2',
          imageKey: "camera",
          productName: "Camera 2",
          price: 750.00,
          rating: 5,
        },
    //     // Add more Cameras here...
     ],
     accessories: [
      {
        id: 'accessory1',
        imageKey: "hp",  
        productName: "Accessory 1",
        price: 30.00,
        rating: 3,
      },
      {
        id: 'accessory2',
        imageKey: "headphone",  
        productName: "Accessory 1",
        price: 30.00,
        rating: 3,
      },
    // Add more accessories here...
    ],
  };
