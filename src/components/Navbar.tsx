
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

//  Logo
const MukesaLogo: React.FC = () => (
  <div className="flex items-center">
    <img 
      src="/images/mukesa logo.png"
      alt="MUKESA Logo"
      className="mr-2 h-16 w-auto" // Reduced height from h-10 to h-8
    />
    <div>
      <span className="text-lg font-bold text-mukesa-blue leading-none">MUKESA</span> {/* Reduced from text-2xl to text-lg */}
      <p className="text-[10px] text-mukesa-text-muted leading-tight">
        Multimedia University of Kenya<br/>Engineering Students' Association
      </p>
    </div>
  </div>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-100 dark:bg-mukesa-gray-dark shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <NavLink to="/" className="flex items-center" aria-label="Go to homepage">
            <MukesaLogo />
          </NavLink>
          
          <div className="flex items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'bg-mukesa-blue text-white' 
                        : 'text-gray-700 hover:bg-mukesa-red hover:text-white dark:text-mukesa-gray-text dark:hover:bg-mukesa-red dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-md text-gray-700 dark:text-mukesa-gray-text hover:bg-gray-200 dark:hover:bg-mukesa-black focus:outline-none transition-colors duration-300"
              aria-label={theme === 'light' ? "Switch to dark theme" : "Switch to light theme"}
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-mukesa-gray-text hover:text-mukesa-red dark:hover:text-white focus:outline-none"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-100 dark:bg-mukesa-gray-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'bg-mukesa-blue text-white' 
                      : 'text-gray-700 hover:bg-mukesa-red hover:text-white dark:text-mukesa-gray-text dark:hover:bg-mukesa-red dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
