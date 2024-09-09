// import React, { useState } from 'react';

// const SignUp = () => {
//     const [isSignUp, setIsSignUp] = useState(false); 
//     const [formData, setFormData] = useState({
//       username: '',
//       email: '',
//       password: '',
//     });
  
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
  
//     // Handle form input changes
//     const handleInputChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     // Handle form submission
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const { username, email, password } = formData;
  
//       // Basic form validation for both Sign In and Sign Up
//       if (isSignUp && (!username || !email || !password)) {
//         setError('All fields are required.');
//         return;
//       }
  
//       if (!isSignUp && (!email || !password)) {
//         setError('Email and Password are required.');
//         return;
//       }
  
//       if (password.length < 6) {
//         setError('Password must be at least 6 characters long.');
//         return;
//       }
  
//       // Reset error and show success
//       setError('');
//       setSuccess(isSignUp ? 'Sign up successful!' : 'Sign in successful!');
  
//       // Call your backend or API here
//       console.log('Form submitted:', formData);
//     };
  
//     return (
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isSignUp ? 'Create an Account' : 'Sign In to Your Account'}
//         </h2>
  
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         {success && <p className="text-green-500 text-center mb-4">{success}</p>}
  
//         <form onSubmit={handleSubmit}>
//           {isSignUp && (
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//                 placeholder="Enter your username"
//                 className="w-full p-3 border border-gray-300 rounded-md"
//                 required={isSignUp}
//               />
//             </div>
//           )}
  
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
  
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Enter your password"
//               className="w-full p-3 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
  
//           <button
//             type="submit"
//             className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition duration-300"
//           >
//             {isSignUp ? 'Sign Up' : 'Sign In'}
//           </button>
//         </form>
  
//         <div className="mt-6 text-center">
//           {isSignUp ? (
//             <p>
//               Already have an account?{' '}
//               <button
//                 onClick={() => setIsSignUp(false)}
//                 className="text-red-600 hover:underline"
//               >
//                 Sign In
//               </button>
//             </p>
//           ) : (
//             <p>
//               Don't have an account?{' '}
//               <button
//                 onClick={() => setIsSignUp(true)}
//                 className="text-red-600 hover:underline"
//               >
//                 Sign Up
//               </button>
//             </p>
//           )}
//         </div>
//       </div>
//     );
//   };
  
  
// export default SignUp;





import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic validation for sign-up
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Reset error and show success
    setError('');
    setSuccess('Sign up successful!');

    // Call your backend or API here
    console.log('Sign up form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;



