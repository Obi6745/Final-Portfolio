'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and site name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OH</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Obi Habibi</h1>
              <p className="text-gray-400 text-sm">Student Portfolio</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-300 hover:text-white text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link 
              href="/" 
              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
