'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-primary-100 to-primary-200 text-white'>
      <div className='flex justify-between items-center mx-auto p-4 max-w-6xl container'>
        <Link href='/' className='font-bold text-xl'>
          3Zero Digital
        </Link>

        {/* Desktop Navigation */}
        <nav className='md:flex space-x-6 hidden'>
          <Link
            href='/job-listings'
            className='text-white hover:text-secondary'>
            Job Listings
          </Link>
          <Link
            href='/star-of-the-month'
            className='text-white hover:text-secondary'>
            Star of the Month
          </Link>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='flex justify-center items-center w-8 h-8 focus:outline-none'>
                {/* Hamburger Icon */}
                <div className='space-y-1'>
                  <span className='block bg-white w-6 h-[2px]'></span>
                  <span className='block bg-white w-6 h-[2px]'></span>
                  <span className='block bg-white w-6 h-[2px]'></span>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-gradient-to-r from-primary-100 to-primary-200 shadow-lg mt-2 p-2 rounded-lg w-full'>
              <DropdownMenuItem asChild>
                <Link
                  href='/job-listings'
                  className='block px-4 py-2 text-white hover:text-secondary'>
                  Job Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href='/star-of-the-month'
                  className='block px-4 py-2 text-white hover:text-secondary'>
                  Star of the Month
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
