import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/BigbroLogo.jpg'; 
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1BgkP2FREY/?mibextid=LQQJ4d' },
    { icon: Instagram, url: 'https://www.instagram.com/bigbromultibiz_ng/profilecard/?igsh=MWtrenhnbXI5eDlyYw==' },
    { icon: Twitter, url: '#' },
    { icon: Linkedin, url: '#' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="BigbroMultibiz Logo" 
            className="w-10 h-10 rounded-full"
          />
          <Link 
            to="/" 
            className="text-xl font-bold text-blue-600 hover:text-blue-800 transition"
          >
            BigbroMultibiz
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="bg-white w-3/4 h-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-blue-600">Menu</h2>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
                  >
                    <social.icon size={20} />
                    <span>{social.icon.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;