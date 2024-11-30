import React, { useState } from 'react';
import { useSidebar } from '../SidebarContext';
import {
  BsList,
  BsSearch,
  BsInfoCircle,
  BsShop,
  BsPeople,
  BsNewspaper,
  BsTelephone,
  BsQuestionCircle,
  BsHouseDoor
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logoImage from '../assets/BigbroLogo.jpg';

const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  const [submenu, setSubmenu] = useState(null);

  const handleLinkClick = () => {
    setOpen(false);
    setSubmenu(null);
  };

  return (
    <div className="flex">
      <div className={`bg-blue-600 h-screen p-5 pt-8 ${open ? 'w-72 sm:w-35' : 'w-20 sm:w-15'} duration-300 relative`}>
        <BsList
          className={`bg-white text-dark-green text-3xl rounded-full absolute -right-3 top-9 border border-dark-yellow cursor-pointer ${open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex items-center">
          <img src={logoImage} alt="Logo" className={`h-16 mr-2 duration-500 ${open && 'rotate-[360deg]'}`} />
          <span className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>
            BigbroMultibiz
          </span>
        </div>
        <div className={`flex items-center rounded-md bg-gray-400 mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`} />
          <input
            type="search"
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
          />
        </div>
        <div className={`mt-6 ${!open && 'px-2.5'}`}>
          {/* Home */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'home' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsHouseDoor className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Home</span>
            </Link>
          </div>

          {/* Products */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/products"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'products' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsShop className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Products</span>
            </Link>
          </div>

          {/* Team */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/team"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'team' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsPeople className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Team</span>
            </Link>
          </div>

          {/* About */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/about"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'about' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsInfoCircle className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>About</span>
            </Link>
          </div>

          {/* Blog */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/blog"
              className={`flex items-center text-white hover:bg-gray-700 rounded-md p-2 ${submenu === 'blog' && 'bg-gray-700'}`}
              onClick={() => handleLinkClick()}
            >
              <BsNewspaper className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Blogs</span>
            </Link>
          </div>

          {/* Contacts */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/contacts"
              className="flex items-center text-white hover:bg-gray-700 rounded-md p-2"
              onClick={handleLinkClick}
            >
              <BsTelephone className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>Contacts</span>
            </Link>
          </div>

          {/* FAQs */}
          <div className={`flex items-center rounded-md ${!open ? 'px-2.5' : 'px-4'} py-2`}>
            <Link
              to="/faqs"
              className="flex items-center text-white hover:bg-gray-700 rounded-md p-2"
              onClick={handleLinkClick}
            >
              <BsQuestionCircle className={`text-lg mr-2 ${!open && 'mx-auto'}`} />
              <span className={`${!open && 'hidden'}`}>FAQs</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;