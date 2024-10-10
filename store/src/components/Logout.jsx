import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');

    // Navigate to the home page ("/") after logout
    navigate('/', { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-600 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 transition duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
