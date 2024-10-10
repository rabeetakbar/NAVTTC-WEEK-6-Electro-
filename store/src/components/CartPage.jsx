
import React from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; // Make sure to install axios if you haven't

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate total price and total quantity
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total quantity

  // Function to normalize the image URL
  const normalizeImageUrl = (url) => {
    return url.replace(/\\/g, '/');  // Replace backslashes with forward slashes
  };

  // Function to handle checkout
  const handleCheckout = async () => {
    try {
      // Send the entire cart data to the API, including product_id
      await Promise.all(
        cartItems.map((item) =>
          axios.post('http://localhost:8000/createcart', {
            product_id: item.productName,  // Use the correct property for product_id
            quantity: item.quantity,
            price: item.price,
          })
        )
      );
      alert('Your cart has been saved!'); // Alert the user
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error);
      alert('There was an error saving your cart.'); // Alert on error
    }
  };

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
                  {/* Use the normalized image URL */}
                  <img
                    src={normalizeImageUrl(item.imageKey)}  // Normalize the image URL
                    alt={item.productName} // Provide descriptive alt text
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.productName}</h3>
                    <p className="text-gray-500">{`$${item.price.toFixed(2)}`}</p> {/* Corrected single dollar sign */}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => {
                        if (item.quantity > 1) {
                          updateQuantity(item, item.quantity - 1);
                        }
                      }}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="bg-gray-300 px-2 py-1 rounded"
                      onClick={() => {
                        updateQuantity(item, item.quantity + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-bold mr-4">{`$${(item.price * item.quantity).toFixed(2)}`}</p> {/* Corrected single dollar sign */}
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => {
                      removeFromCart(index);
                      // Call API to remove item if needed, you might have to create a remove endpoint
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total Quantity: {totalQuantity}</h3>
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
            <Link 
  to={{
    pathname: "../checkout",
    state: { totalAmount: total }, // Pass the total amount
  }}
>
  <button 
    className="bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600"
    onClick={handleCheckout} // Handle checkout
  >
    Checkout
  </button>
</Link>

            <Link to="/products/laptops">
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

