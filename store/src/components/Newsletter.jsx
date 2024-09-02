import React from "react";
import images from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Newsletter() {
  return (
    <div class=" bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-screen-lg mx-auto text-center">
        <div class="flex flex-col items-center justify-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
          <img src={images.email} alt="Newsletter" class="h-16 w-16" />
          <div>
            <h2 class="text-xl font-semibold text-gray-900">
              Sign Up for the <span class="font-bold">NEWSLETTER</span>
            </h2>
          </div>
          <form class="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              class="rounded-l-full p-2 w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              class="bg-red-600 text-white p-2 px-6 rounded-r-full hover:bg-red-700 transition-colors"
            >
              <span class="flex items-center">
                <i class="fas fa-envelope mr-2"></i>Subscribe
              </span>
            </button>
          </form>
        </div>
        <div class="flex justify-center space-x-4 mt-6">
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
