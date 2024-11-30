import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Team member images (you'll need to replace these with actual team member photos)
import member1 from '../assets/BigbroMultibiz.jpg';
import member2 from '../assets/BigbroMultibiz.jpg';
import member3 from '../assets/BigbroMultibiz.jpg';
import member4 from '../assets/BigbroMultibiz.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Usman Taiwo-Hassan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15 years of experience in strategic business development and social entrepreneurship.',
    image: member1,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'john.doe@bigbromultibiz.com'
  },
  {
    id: 2,
    name: 'ibrahim sheu',
    role: 'Chief Operations Officer',
    bio: 'Expert in operational excellence and process optimization with a passion for sustainable business practices.',
    image: member2,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'jane.smith@bigbromultibiz.com'
  },
  {
    id: 3,
    name: 'Abdullah salaam',
    role: 'Head of Business Development',
    bio: 'Innovative strategist with extensive experience in agricultural and real estate sector transformations.',
    image: member3,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'michael.johnson@bigbromultibiz.com'
  },
  {
    id: 4,
    name: 'Maryam bello',
    role: 'Community Engagement Director',
    bio: 'Passionate social entrepreneur dedicated to creating meaningful impact through community-driven initiatives.',
    image: member4,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'sarah.williams@bigbromultibiz.com'
  }
];

const Team = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Leadership Team
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-white text-2xl hover:text-blue-400 transition-colors"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h2>
              <h3 className="text-blue-600 font-medium mb-4">
                {member.role}
              </h3>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Our diverse team brings together experts from various backgrounds, united by a common goal of driving positive change through innovative business solutions.
        </p>
      </div>
    </div>
  );
};

export default Team;