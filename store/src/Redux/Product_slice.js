// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Thunk to fetch product data from API
// export const fetchData = createAsyncThunk('products/fetchData', async () => {
//     const response = await axios.get('http://localhost:8000/getproduct');
//     return response.data.productData; // Return the productData object
//   });

// // Create the product slice
// const productSlice = createSlice({
//     name: 'products',
//     initialState: {
//       products: [],
//       status: 'idle',  // idle, loading, succeeded, failed
//       error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchData.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(fetchData.fulfilled, (state, action) => {
//           state.status = 'succeeded';
//           // Combine all categories into one array
//           const { laptops, smartphones, cameras, accessories } = action.payload;
//           state.products = [
//             ...laptops,
//             ...smartphones,
//             ...cameras,
//             ...accessories,
//           ];
//         })
//         .addCase(fetchData.rejected, (state, action) => {
//           state.status = 'failed';
//           state.error = action.error.message;
//         });
//     },
//   });
  
//   export default productSlice.reducer;
  









import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch product data from API
export const fetchData = createAsyncThunk('products/fetchData', async () => {
    const response = await axios.get('http://localhost:8000/getproduct');
    return response.data.productData; // Return the productData object
});

// Thunk to fetch products by category
export const fetchDataByCategory = createAsyncThunk(
    'products/fetchDataByCategory',
    async (category) => {
        const response = await axios.get(`http://localhost:8000/getproduct/${category}`); // Adjust the endpoint to match your backend
        return response.data.productData; // Return the productData object
    }
);

// Create the product slice
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',  // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Combine all categories into one array
                const { laptops, smartphones, cameras, accessories } = action.payload;
                state.products = [
                    ...laptops,
                    ...smartphones,
                    ...cameras,
                    ...accessories,
                ];
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchDataByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Set products to the specific category's products
                state.products = action.payload; // Assuming the API returns an array of products for the category
            })
            .addCase(fetchDataByCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;