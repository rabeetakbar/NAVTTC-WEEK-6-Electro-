// import React from 'react';
// import ProductCard from './ProductCard';  // The card component
// import images from './images';  // Contains image paths

// const ProductList = ({ products, categoryName, addToCart }) => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${categoryName} Collection`}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map(productData => (
//           <ProductCard
//             key={productData.id}
//             imageKey={productData.imageKey}
//             category={categoryName}
//             productName={productData.productName}
//             price={productData.price}
//             rating={productData.rating}
//             addToCart={() => addToCart({
//               ...productData, 
//               imageSrc: images[productData.imageKey] 
//             })}
//           />
//         ))}
//       </div>
//     </div>
//   );
//  };

// export default ProductList;


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks
// import { fetchData } from '../Redux/Product_slice.js';  // Import the thunk action
// import ProductCard from './ProductCard';  // The card component
// import images from './images';  // Contains image paths

// const ProductList = ({ categoryName, addToCart }) => {
//   const dispatch = useDispatch();
//   const { products, status, error } = useSelector((state) => state.products);

//   // Check if token exists (you can adjust this based on where the token is stored)
//   const token = localStorage.getItem('jwtToken');  // Replace 'token' with the actual key for your token

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchData());
//     }
//   }, [dispatch, status]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${categoryName} Collection`}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((productData) => (
//           <ProductCard
//             key={productData.id}
//             imageKey={productData.imageKey}
//             category={categoryName}
//             productName={productData.productName}
//             price={productData.price}
//             rating={productData.rating}
//             // Check if token is available before adding to cart
//             addToCart={() => {
//               if (token) {
//                 addToCart({
//                   ...productData,
//                   imageSrc: images[productData.imageKey],
//                 });
//               } else {
//                 console.log('User is not signed in, cannot add to cart.');
//                 alert('Please sign in to add items to your cart.');
//               }
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;





// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDataByCategory } from '../Redux/Product_slice.js';
// import ProductCard from './ProductCard';
// import images from './images';

// const ProductList = ({ categoryName, addToCart }) => {
//     const dispatch = useDispatch();
//     const { products, status, error } = useSelector((state) => state.products);

//     // Check if token exists
//     const token = localStorage.getItem('jwtToken');

//     useEffect(() => {
//         // Dispatch action to fetch products by category
//         dispatch(fetchDataByCategory(categoryName));
//     }, [dispatch, categoryName]);

//     if (status === 'loading') {
//         return <div>Loading...</div>;
//     }

//     if (status === 'failed') {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//             <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${categoryName} Collection`}</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {products.map((productData) => (
//                     <ProductCard
//                         key={productData.id}
//                         imageKey={productData.imageKey}
//                         category={categoryName}
//                         productName={productData.productName}
//                         price={productData.price}
// //                         rating={productData.rating}
//                         addToCart={() => {
//                             if (token) {
//                                 addToCart({
//                                     ...productData,
//                                     imageSrc: images[productData.imageKey],
//                                 });
//                             } else {
//                                 console.log('User is not signed in, cannot add to cart.');
//                                 alert('Please sign in to add items to your cart.');
//                             }
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductList;





// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ProductList from './ProductList';
// import { fetchDataByCategory } from '../Redux/Product_slice.js';
// import { useDispatch, useSelector } from 'react-redux';

// const ProductListPage = () => {
//   const dispatch = useDispatch();
//   const { products, status, error } = useSelector((state) => state.products);
//   const { category } = useParams();

//   useEffect(() => {
//     dispatch(fetchDataByCategory(category));
//   }, [dispatch, category]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${category} Collection`}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((productData) => (
//           <ProductCard
//             key={productData.id}
//             imageKey={productData.imageKey}
//             category={category}
//             productName={productData.productName}
//             price={productData.price}
//             rating={productData.rating}
//             addToCart={() => addToCart(productData)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductListPage;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchDataByCategory } from '../Redux/Product_slice.js';  // Fetch data by category
// import ProductCard from './ProductCard';  // Product card component

// const ProductList = ({ addToCart }) => {
//   const dispatch = useDispatch();
//   const { category } = useParams();  // Get the category from the route
//   const { products, status, error } = useSelector((state) => state.products);

//   // Check if token exists in local storage for authentication
//   const token = localStorage.getItem('jwtToken');

//   useEffect(() => {
//     // Fetch products by category whenever the route changes
//     if (category) {
//       dispatch(fetchDataByCategory(category));
//     }
//   }, [dispatch, category]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${category} Collection`}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((productData) => (
//           <ProductCard
//             key={productData.id}
//             productName={productData.productName}
//             price={productData.price}
//             rating={productData.rating}
//             addToCart={() => {
//               if (token) {
//                 addToCart(productData);  // Proceed to add to cart if user is signed in
//               } else {
//                 console.log('User is not signed in, cannot add to cart.');
//                 alert('Please sign in to add items to your cart.');
//               }
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataByCategory } from '../Redux/Product_slice.js';  // Fetch data by category
import ProductCard from './ProductCard';  // Product card component

const ProductList = ({ addToCart }) => {
  const dispatch = useDispatch();
  const { category } = useParams();  // Get the category from the route
  const { products, status, error } = useSelector((state) => state.products);

  // Check if token exists in local storage for authentication
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    // Fetch products by category whenever the route changes
    if (category) {
      dispatch(fetchDataByCategory(category));
    }
  }, [dispatch, category]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{`Our ${category} Collection`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((productData) => (
          <ProductCard
            key={productData.id}
            imageKey={productData.imageKey}  // Passing image URL
            productName={productData.productName}
            price={productData.price}
            rating={productData.rating}
            addToCart={() => {
              if (token) {
                addToCart(productData);  // Proceed to add to cart if user is signed in
              } else {
                console.log('User is not signed in, cannot add to cart.');
                alert('Please sign in to add items to your cart.');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
