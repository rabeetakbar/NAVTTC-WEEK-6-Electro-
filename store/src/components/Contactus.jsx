import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
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
            <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
                ></textarea>
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
