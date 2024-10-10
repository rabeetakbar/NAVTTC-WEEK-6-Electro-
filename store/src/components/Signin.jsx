
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LogoutButton from './Logout'; // Import the LogoutButton

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To track if the user is logged in
  const navigate = useNavigate();

  // Check if user is already logged in when component loads
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation for sign-in
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      // Reset error message
      setError('');

      // Make POST request to the login API
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to log in');
      }

      setSuccess('Sign in successful!');
      console.log('Sign in successful:', data);

      // Save the token to localStorage for future authenticated requests
      localStorage.setItem('jwtToken', data.token); // Save the token
      setIsLoggedIn(true); // Set user as logged in

      // Show success message for 2 seconds, then navigate to home page
      setTimeout(() => {
        navigate('/products/laptops');
      }, 1000);

      // Reset the form
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Sign in error:', error);
      setError(error.message || 'Error signing in, please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In to Your Account</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      {/* If the user is logged in, show the Logout button */}
      {isLoggedIn ? (
        <div className="text-center">
          <p>You are already signed in.</p>
          <LogoutButton />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded-md font-medium hover:bg-red-700 transition duration-300"
            >
              Sign In
            </button>
          </div>

          <div className="text-center mt-4">
            Don't have an Account? <Link to="/signup" className="hover-underline hover:text-red-600">
              Sign Up!
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
