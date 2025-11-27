'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Ana Səhifə', href: '/' },
    { name: 'Haqqımızda', href: '/about' },
    { name: 'Kurslar', href: '/courses' },
    { name: 'Müəllimlər', href: '/teachers' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.jpg" 
                alt="Oxu Tədris Mərkəzi" 
                width={60} 
                height={60} 
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-primary leading-none">OXU</span>
                <span className="text-xs text-secondary font-medium tracking-wider">TƏDRİS MƏRKƏZİ</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
            >
              <Phone size={18} />
              Əlaqə
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-5 py-3 rounded-md font-medium hover:bg-secondary transition-colors duration-200"
            >
              Əlaqə
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
