// import React from 'react';
// import ProductCard from './ProductCard';
// import images from './images';  

// const Cameras = ({ addToCart }) => { 
//   const cameras = [
//     {
//       id: 'camera1',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 1",
//       price: 1200.00,
//       oldPrice: 1300.00,
//       rating: 5,
//     },
//     {
//       id: 'camera2',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 2",
//       price: 900.00,
//       oldPrice: 1000.00,
//       rating: 4,
//     },
//     {
//       id: 'camera3',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 3",
//       price: 1500.00,
//       oldPrice: 1600.00,
//       rating: 5,
//     },
//     {
//       id: 'camera4',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 4",
//       price: 800.00,
//       oldPrice: 900.00,
//       rating: 4,
//     },
//     {
//       id: 'camera5',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 5",
//       price: 1100.00,
//       oldPrice: 1200.00,
//       rating: 5,
//     },
//     {
//       id: 'camera6',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 6",
//       price: 950.00,
//       oldPrice: 1050.00,
//       rating: 4,
//     },
//     {
//       id: 'camera7',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 7",
//       price: 1300.00,
//       oldPrice: 1400.00,
//       rating: 5,
//     },
//     {
//       id: 'camera8',   
//       imageKey: "camera",
//       category: "Cameras",
//       productName: "Camera 8",
//       price: 700.00,
//       oldPrice: 800.00,
//       rating: 4,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Capture the Moment: Explore Our Cameras</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {cameras.map(camera => (
//           <div
//             key={camera.id}
//             className="bg-purple-800 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:bg-purple-700"
//           >
//             <ProductCard
//               imageKey={camera.imageKey}
//               category={camera.category}
//               productName={camera.productName}
//               price={camera.price}
//               oldPrice={camera.oldPrice}
//               rating={camera.rating}
//               addToCart={() => addToCart({
//                 ...camera, 
//                 imageSrc: images[camera.imageKey],  
//                 quantity: 1  
//               })}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cameras;
