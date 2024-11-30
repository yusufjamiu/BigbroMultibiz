import React, { useState } from 'react';
import { FaInfoCircle, FaChevronRight } from 'react-icons/fa';

// Product images (replace with your actual product images)
import product1 from '../assets/BigbroMultibiz.jpg';
import product2 from '../assets/BigbroMultibiz.jpg';
import product3 from '../assets/BigbroMultibiz.jpg';

const products = [
  {
    id: 1,
    name: 'Agricultural Innovation Kit',
    description: 'Cutting-edge agricultural technology package for modern farming solutions.',
    category: 'Agriculture',
    image: product1,
    features: [
      'Advanced soil analysis tools',
      'Precision irrigation system',
      'Crop health monitoring sensors'
    ]
  },
  {
    id: 2,
    name: 'Real Estate Investment Guide',
    description: 'Comprehensive digital course on strategic real estate investment techniques.',
    category: 'Real Estate',
    image: product2,
    features: [
      'Market trend analysis',
      'Investment strategy blueprints',
      'Risk management techniques'
    ]
  },
  {
    id: 3,
    name: 'Hospitality Business Accelerator',
    description: 'Comprehensive program for entrepreneurs in the hospitality industry.',
    category: 'Hospitality',
    image: product3,
    features: [
      'Business model development',
      'Marketing and branding strategies',
      'Operational excellence training'
    ]
  }
];

const Products = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProductDetails = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Innovative Solutions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                {product.category}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <button 
                  onClick={() => toggleProductDetails(product.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaInfoCircle className="text-2xl" />
                </button>
              </div>

              {expandedProduct === product.id && (
                <div className="mb-4 p-4 bg-gray-100 rounded-md">
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-gray-600 mb-4">
                {product.description}
              </p>

              <div className="flex justify-end items-center">
                <button className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 font-semibold">
                  <span>Read More</span>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Discover our range of innovative solutions designed to transform industries and empower entrepreneurs.
        </p>
      </div>
    </div>
  );
};

export default Products;