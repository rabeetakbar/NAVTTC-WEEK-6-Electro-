import React from 'react';
import { Link } from 'react-router-dom'; 
const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); 
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <img src={item.imageSrc} alt={item.productName} className="w-16 h-16 object-cover rounded" />  
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                    <p className="text-gray-500">{`$${item.price.toFixed(2)}`}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => updateQuantity(item, item.quantity - 1)} 
                      disabled={item.quantity <= 1} 
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => updateQuantity(item, item.quantity + 1)} 
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-bold mr-4">{`$${(item.price * item.quantity).toFixed(2)}`}</p>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" 
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
          <Link to='../checkout'>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600">
              Checkout
            </button>
            </Link>
            <Link to="/.">
              <button className="bg-green-500 text-white px-6 py-2 mt-4 ml-4 rounded hover:bg-green-600">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
