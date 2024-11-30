import React from 'react';
import { GitMerge, Target, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About BigbroMultibiz
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A social enterprise transforming Agriculture, Real Estate, and Hospitality in Ilorin, Kwara State
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
              <Target className="mr-4 text-blue-500" size={36} />
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a social enterprise driven by a mission to transform the Agricultural Business, 
              Real Estate, and Hospitality Industries through relentless innovation. Our commitment 
              is to create sustainable solutions that empower communities and drive economic growth 
              in Kwara State and beyond.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-green-600 mb-6 flex items-center">
              <Award className="mr-4 text-green-500" size={36} />
              Our Values
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <GitMerge className="mr-3 text-purple-500" size={24} />
                Community Impact
              </li>
              <li className="flex items-center">
                <Users className="mr-3 text-indigo-500" size={24} />
                Sustainable Development
              </li>
              <li className="flex items-center">
                <Target className="mr-3 text-red-500" size={24} />
                Innovative Solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upcoming Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Agricultural Innovation Forum
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring sustainable agricultural practices and technological advancements.
              </p>
              <p className="text-sm text-gray-500">
                Date: September 15, 2024
                <br />
                Location: Ilorin, Kwara State
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Real Estate Development Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Discussing innovative approaches to sustainable urban development.
              </p>
              <p className="text-sm text-gray-500">
                Date: October 5, 2024
                <br />
                Location: Online Event
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                Hospitality Sector Networking
              </h3>
              <p className="text-gray-600 mb-4">
                Connecting hospitality entrepreneurs and exploring growth opportunities.
              </p>
              <p className="text-sm text-gray-500">
                Date: November 12, 2024
                <br />
                Location: Ilorin, Kwara State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;