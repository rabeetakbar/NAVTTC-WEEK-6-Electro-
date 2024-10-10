



import React, { useState } from 'react';

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track if order is placed
  const [cashOnDelivery, setCashOnDelivery] = useState(false); // State to toggle Cash on Delivery
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalcode: '',
    amount: 200, // You can dynamically update this value if needed
  });
  const [error, setError] = useState(null); // State to handle errors

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Prevent form from submitting

    try {
      const response = await fetch('http://localhost:8000/createpayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong with the payment request.');
      }

      const data = await response.json();
      console.log('Payment Response:', data);
      setOrderPlaced(true); // Set orderPlaced to true to show thank you message
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleToggleCOD = () => {
    setCashOnDelivery(!cashOnDelivery); // Toggle Cash on Delivery
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="border border-gray-300 p-2 rounded col-span-2"
                required
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="postalcode"
                value={formData.postalcode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
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
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Amount"
                className="border border-gray-300 p-2 rounded col-span-2"
                required
              />

              {/* Cash on Delivery toggle */}
              <div className="flex items-center space-x-2 col-span-2">
                <input
                  type="checkbox"
                  checked={cashOnDelivery}
                  onChange={handleToggleCOD}
                  className="h-5 w-5 text-blue-600"
                />
                <label className="text-gray-700">Cash on Delivery</label>
              </div>
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

            {/* Display Error if any */}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </>
      )}

      {/* Thank You Message */}
      {orderPlaced && (
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-green-500">Thank You!</h2>
          <p className="text-lg mt-4">Your order has been placed successfully.</p>
          {cashOnDelivery && (
            <p className="text-md mt-2 text-gray-700">You chose Cash on Delivery.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Checkout;



