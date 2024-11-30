import React, { useState, useEffect } from 'react';
import { useSidebar } from '../SidebarContext';
import image1 from '../assets/bigbro1.jpeg';
import image2 from '../assets/bigbro2.jpeg';
import image3 from '../assets/bigbro3.jpeg';
import image4 from '../assets/bigbro4.jpeg';
import image5 from '../assets/bigbro5.jpeg';
import { HiMenu } from "react-icons/hi";
import { MdBusiness } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Home = () => {
  const { setOpen } = useSidebar();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Image Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={images[currentImageIndex]} 
          alt="BigbroMultibiz Showcase" 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            BigbroMultibiz Nigeria Limited
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Transforming Agriculture, Real Estate, and Hospitality through Innovative Solutions
          </p>
        </div>
      </div>

      {/* Increased margin and added decorative elements to Our Projects section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the diverse range of initiatives and services that define our commitment to innovation and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div 
            onClick={() => setOpen(true)} 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center cursor-pointer 
                       hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <HiMenu className="text-4xl mb-4 text-blue-600" />
            <span className="text-center font-semibold text-gray-700">Menu</span>
          </div>
          
          <Link 
            to="/" 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center 
                       hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <MdBusiness className="text-4xl mb-4 text-green-600" />
            <span className="text-center font-semibold text-gray-700">
              Bigbromultibiz Nig. Ltd
            </span>
          </Link>
          
          <Link 
            to="/" 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center 
                       hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <FaHandsHelping className="text-4xl mb-4 text-purple-600" />
            <span className="text-center font-semibold text-gray-700">
              Emirate Log and General Services
            </span>
          </Link>
          
          <Link 
            to="/" 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center 
                       hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <FaGraduationCap className="text-4xl mb-4 text-red-600" />
            <span className="text-center font-semibold text-gray-700">
              Community Services
            </span>
          </Link>
          
          <Link 
            to="/" 
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center 
                       hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <FcDonate className="text-4xl mb-4 text-yellow-600" />
            <span className="text-center font-semibold text-gray-700">
              Donate Now!!!
            </span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Bigbromultibiz</h1>
        <p className="text-lg mb-8 text-gray-600 max-w-3xl">
          We are a social enterprise based in Ilorin, Kwara State, driven by a mission to transform the Agricultural Business, Real Estate, and Hospitality Industries through relentless innovation.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Products</h2>
            <p className="mb-4 text-gray-600">Discover our range of innovative solutions designed to transform industries and empower entrepreneurs.</p>
            <a href="/products" className="text-blue-500 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-green-600">Blog</h2>
            <p className="mb-4 text-gray-600">Stay informed with our latest thoughts, research, and industry insights.</p>
            <a href="/events" className="text-blue-500 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-purple-600">About</h2>
            <p className="mb-4 text-gray-600">A social enterprise transforming Agriculture, Real Estate, and Hospitality in Ilorin, Kwara State</p>
            <a href="/blog" className="text-blue-500 hover:text-blue-700 font-semibold">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;