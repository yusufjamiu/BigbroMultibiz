import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaUser, 
  FaCommentAlt 
} from 'react-icons/fa';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Information Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+234 (813) 844-2474</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>thebigbro001@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>Ilorin, Kwara State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label 
                htmlFor="name" 
                className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600"
              >
                Your Name
              </label>
              <div className="flex items-center border-2 rounded-lg">
                <FaUser className="ml-4 text-gray-500" />
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label 
                htmlFor="email" 
                className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600"
              >
                Email Address
              </label>
              <div className="flex items-center border-2 rounded-lg">
                <FaEnvelope className="ml-4 text-gray-500" />
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label 
                htmlFor="message" 
                className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600"
              >
                Your Message
              </label>
              <div className="flex items-start border-2 rounded-lg">
                <FaCommentAlt className="ml-4 mt-4 text-gray-500" />
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="4"
                  className="w-full p-3 pl-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <FaPaperPlane />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;