import React, { useEffect, useState } from "react";
import images from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("subscribed");
    if (subscribed) {
      setIsSubscribed(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("subscribed", true);
      setIsSubscribed(true);
      setEmail("");

      alert("You're subscribed!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleUnsubscribe = () => {
    localStorage.removeItem("subscribed");
    setIsSubscribed(false);
    alert("You've been unsubscribed!");
    setTimeout(() => {
      window.location.reload(); // Refresh the page after unsubscribing
    }, 1000);
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
          <img src={images.email} alt="Newsletter" className="h-16 w-16" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Sign Up for the <span className="font-bold">NEWSLETTER</span>
            </h2>
            {isSubscribed && (
              <div className="mt-2">
                <p className="text-green-600">You're already subscribed!</p>
                <button
                  onClick={handleUnsubscribe}
                  className="text-red-600 underline ml-2"
                >
                  Unsubscribe
                </button>
              </div>
            )}
          </div>
          {!isSubscribed && (
            <form className="flex w-full sm:w-auto" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-l-full p-2 w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-600 text-white p-2 px-6 rounded-r-full hover:bg-red-700 transition-colors"
              >
                <span className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>Subscribe
                </span>
              </button>
            </form>
          )}
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
