// import React, { useEffect } from 'react';
// import ProductCard from './ProductCard';
// import images from './images';  
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../Redux/Product_slice';

// const SmartphonePage = ({ addToCart }) => { 
//   const dispatch=useDispatch();
//   const smartphones=useSelector(state=>state.products)
// useEffect(()=>{
// dispatch(fetchData())

// }, [dispatch])
// console.log(smartphones)

  //--dummy data-----------
  // const smartphones = [
  //   {
  //     id: 'phone1',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 1",
  //     price: 700.00,
  //     oldPrice: 800.00,
  //     rating: 4,
  //   },
  //   {
  //     id: 'phone2',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 2",
  //     price: 950.00,
  //     oldPrice: 1050.00,
  //     rating: 5,
  //   },
  //   {
  //     id: 'phone3',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 3",
  //     price: 850.00,
  //     oldPrice: 900.00,
  //     rating: 4,
  //   },
  //   {
  //     id: 'phone4',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 4",
  //     price: 1200.00,
  //     oldPrice: 1300.00,
  //     rating: 5,
  //   },
  //   {
  //     id: 'phone5',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 5",
  //     price: 500.00,
  //     oldPrice: 600.00,
  //     rating: 3,
  //   },
  //   {
  //     id: 'phone6',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 6",
  //     price: 780.00,
  //     oldPrice: 850.00,
  //     rating: 4,
  //   },
  //   {
  //     id: 'phone7',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 7",
  //     price: 1050.00,
  //     oldPrice: 1150.00,
  //     rating: 5,
  //   },
  //   {
  //     id: 'phone8',
  //     imageKey: "smartphone",
  //     category: "SmartPhones",
  //     productName: "SmartPhone 8",
  //     price: 650.00,
  //     oldPrice: 750.00,
  //     rating: 4,
  //   },
  // ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Explore Our Latest Smartphones</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {smartphones.map(smartphone => (
//           <div
//             key={smartphone.id}
//             className="bg-white text-black p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-blue-100"
//           >
//             <ProductCard
//               imageKey={smartphone.imageKey}
//               category={smartphone.category}
//               productName={smartphone.productName}
//               price={smartphone.price}
//               oldPrice={smartphone.oldPrice}
//               rating={smartphone.rating}
//               addToCart={() => addToCart({
//                 ...smartphone, 
//                 imageSrc: images[smartphone.imageKey],  
//                 quantity: 1  
//               })}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SmartphonePage;
