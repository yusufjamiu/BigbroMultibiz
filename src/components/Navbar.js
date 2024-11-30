import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white-300 px-4 py-3 items-center mb-6">
      <div className="text-xl font-bold text-blue-600">BigBroMultibiz</div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/share/1BgkP2FREY/?mibextid=LQQJ4d" className="text-blue-600 hover:text-gray-700">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/bigbromultibiz_ng/profilecard/?igsh=MWtrenhnbXI5eDlyYw==" className="text-blue-600 hover:text-gray-700">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;