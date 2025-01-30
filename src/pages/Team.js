import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Team member images (you'll need to replace these with actual team member photos)
import member1 from '../assets/Hassan.jpeg';
import member2 from '../assets/Jane.jpeg';
import member3 from '../assets/Sulaiman.jpeg';
import member4 from '../assets/Usman.jpeg';
import member5 from '../assets/BigbroMultibiz.jpg';
import member6 from '../assets/BigbroMultibiz.jpg';
import member7 from '../assets/BigbroMultibiz.jpg';
import member8 from '../assets/BigbroMultibiz.jpg';
import member9 from '../assets/BigbroMultibiz.jpg';





const teamMembers = [
  {
    id: 1,
    name: 'Usman Taiwo-Hassan',
    role: 'Co-founder and Managing Director',
    bio: 'Mini MBA, Lagos Business School',
    image: member1,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'Thebigbro001@gmail.com'
  },
  {
    id: 2,
    name: 'Oladele Adeola Jane',
    role: 'Co-founder and Marketing Director',
    bio: '',
    image: member2,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: ''
  },
  {
    id: 3,
    name: 'Usman Kabir',
    role: 'Admin Officer',
    bio: 'HND, Nigeria Institute of Management(Chartered)',
    image: member3,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'Usmankabir470@gmail.com'
  },
  {
    id: 4,
    name: 'Usman Jamiu Muhammed',
    role: 'Head of Sales Management',
    bio: 'HND, Nigeria Institute of Management(Chartered)',
    image: member4,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'jamium729@gmail.com'
  },
  {
    id: 5,
    name: 'Abdulrasheed Adebola Babalola',
    role: 'B.EHS, EHO',
    bio: 'Community Health Officer',
    image: member5,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'Adebola1200@gmail.com'
  },
  {
    id: 6,
    name: 'Dr. Niyi Balogun',
    role: 'Veterinary Consultant',
    bio: 'Vet. Med, MVSC',
    image: member6,
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'niyijamesbalogun@gmail.com'
  },
  {
    id: 7,
    name: 'Godwin Tayo Odun',
    role: 'Head of Logistic Operations',
    image: member7
  },
  {
    id: 8,
    name: 'Jawad Olayemi',
    role: 'Company Secretary',
    image: member8
  },
  {
    id: 9,
    name: 'Supol Humphry Aye',
    role: 'Security Consultant',
    image: member9
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