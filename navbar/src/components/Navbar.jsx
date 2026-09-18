import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Brand<span className="text-indigo-400">UI</span>
          </span>
        </div>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
        </nav>

        {/* 3. Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2">
            Sign In
          </button>
          <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* 4. Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* 5. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-6 px-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white">Features</a>
          <a href="#solutions" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white">Solutions</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white">Pricing</a>
          <a href="#resources" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-300 hover:text-white">Resources</a>
          
          <div className="flex flex-col gap-2 pt-4 border-t border-slate-800">
            <button className="w-full rounded-lg border border-slate-700 py-2.5 text-sm font-medium text-slate-300">
              Sign In
            </button>
            <button className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}