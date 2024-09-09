import React from 'react';
import teamImage from '../assets/team.png';
import team1Image from '../assets/team1.png'; 
import missionImage from '../assets/mission.png';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        {/* Company Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            We are a leading company in the tech industry, dedicated to providing the best products and services to our customers. With a commitment to innovation and excellence, we strive to create value and make a difference in the lives of people around the world.
          </p>
          <div className="flex justify-center mt-8">
            <img src={team1Image} alt="Our Team" className="rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2"/>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                Our mission is to revolutionize the tech industry with cutting-edge products and services that empower people to achieve more. We are committed to sustainability, innovation, and customer satisfaction in everything we do.
              </p>
            </div>
            <div>
              <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-last lg:order-first">
              <img src={missionImage} alt="Our Vision" className="rounded-lg shadow-lg"/>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                Our vision is to be a global leader in technology, driving change and shaping the future through innovation, creativity, and a relentless focus on customer needs. We envision a world where technology enhances every aspect of life.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src={teamImage} alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-medium">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img src={teamImage} alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-medium">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img src={teamImage} alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-medium">Michael Brown</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="text-center">
              <img src={teamImage} alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-medium">Emily Johnson</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
