import React, { useState } from 'react';

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track if order is placed

  const handlePlaceOrder = (e) => {
    e.preventDefault(); // Prevent form from submitting
    setOrderPlaced(true); // Set orderPlaced to true to show thank you message
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      {/* Shipping Information */}
      {!orderPlaced && (
        <>
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 p-2 rounded col-span-2"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 p-2 rounded"
                required
              />
            </form>
          </div>

          {/* Payment Information */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card Number"
                className="border border-gray-300 p-2 rounded col-span-2"
                required
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                className="border border-gray-300 p-2 rounded"
                required
              />
            </form>

            {/* Place Order Button */}
            <div className="mt-6 text-right">
              <button
                onClick={handlePlaceOrder}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}

      {/* Thank You Message */}
      {orderPlaced && (
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-green-500">Thank You!</h2>
          <p className="text-lg mt-4">Your order has been placed successfully.</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
