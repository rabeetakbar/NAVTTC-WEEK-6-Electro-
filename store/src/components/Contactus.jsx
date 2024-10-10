import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const [rating, setRating] = useState(0); // State to track the selected rating
  const [name, setName] = useState(''); // State for the name input
  const [email, setEmail] = useState(''); // State for the email input
  const [detailedReview, setDetailedReviews] = useState(''); // State for the review input

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare the review data to send
    const reviewData = {
      name,
      email,
      detailedreview: detailedReview,
      rating,
    };

    try {
      // Send a POST request to the API
      const response = await fetch('http://localhost:8000/postreview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Review submitted successfully:', jsonResponse);
        
        // Show alert to user
        alert('Review submitted successfully!');
        
        // Optionally reset form fields
        setName('');
        setEmail('');
        setDetailedReviews('');
        setRating(0);
        
        // Refresh page or you can navigate to another page if needed
        // window.location.reload(); // Uncomment this line to refresh the page
      } else {
        console.error('Failed to submit review:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Contact Us</h1>

        {/* Contact Information Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <FontAwesomeIcon icon={faPhone} className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Main St, Anytown, USA</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update name state
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={detailedReview}
                  onChange={(e) => setDetailedReviews(e.target.value)} // Update review state
                ></textarea>
              </div>

              {/* Star Rating Section */}
              <div className="mb-4 text-center">
                <label className="block text-gray-700 text-sm font-bold mb-2">Rate Us</label>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setRating(star)}
                      onMouseLeave={() => setRating(star === rating ? star : 0)} // Show star only if not selected
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-500 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
