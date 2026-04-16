import { Menu } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const isActive = () => {
    
  };
  return (
 <>
 <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-linear-to-r  text-amber-600 bg-clip-text ">
                DUKAN
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Home
              </Link>
              <Link
                to=""
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("")
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Roadmap
              </Link>
              <Link
                to=""
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("")
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Pricing
              </Link>
              <Link
                to=""
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("")
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Contact
              </Link>
              <Link
                to=""
                className={`px-3 py-2 text-sm font-medium transition-colors  text-amber-600
                `}
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block invisible">
            <Link
              to="https://codescandy.com/"
              target="_blank"
              className="btn-primary w-full"
            >
              Get Template
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium ${
                isActive("/")
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to=""
              className={`block px-3 py-2 text-base font-medium ${
                isActive("")
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              to=""
              className={`block px-3 py-2 text-base font-medium ${
                isActive("")
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to=""
              className={`block px-3 py-2 text-base font-medium ${
                isActive("")
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to=""
              className={`block px-3 py-2 text-base font-medium ${
                isActive("") || location.pathname.startsWith("/")
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <div className="mt-4 px-3 py-2">
              <Link
                to="https://codescandy.com/"
                target="_blank"
                className="btn-primary w-full"
              >
                Get Template
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
 </>
  )
}
