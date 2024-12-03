import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/BigbroLogo.jpg';
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag, 
  Users, 
  Info, 
  Newspaper, 
  Phone, 
  HelpCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: ShoppingBag, label: 'Products', path: '/products' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Info, label: 'About', path: '/about' },
    { icon: Newspaper, label: 'Blogs', path: '/blog' },
    { icon: Phone, label: 'Contacts', path: '/contacts' },
    { icon: HelpCircle, label: 'FAQs', path: '/faqs' }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1BgkP2FREY/?mibextid=LQQJ4d' },
    { icon: Instagram, url: 'https://www.instagram.com/bigbromultibiz_ng/profilecard/?igsh=MWtrenhnbXI5eDlyYw==' },
    { icon: Twitter, url: '#' },
    { icon: Linkedin, url: '#' }
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 
        w-64 bg-gradient-to-b from-blue-600 to-blue-800 
        transform transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block
        shadow-xl
      `}>
        <div className="p-6 flex flex-col h-full">
          {/* Logo and Brand */}
          <div className="flex items-center mb-8 space-x-3 md:hidden">
            <img 
              src={logoImage} 
              alt="BigbroMultibiz Logo" 
              className="w-12 h-12 rounded-full"
            />
            <h2 className="text-white text-xl font-bold">BigbroMultibiz</h2>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 flex-grow">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center p-3 
                  text-white hover:bg-blue-700 
                  rounded-lg transition-colors 
                  group
                "
              >
                <item.icon 
                  className="mr-3 text-blue-200 group-hover:text-white" 
                  size={20} 
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="mt-auto text-center text-blue-100 text-xs p-4">
            {/* Mobile Social Links - Only visible on smaller screens */}
            <div className="md:hidden flex justify-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p>© 2024 BigbroMultibiz</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;