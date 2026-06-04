"use client";
//This is new code file.
import Link from "next/link";
import { useState } from "react";

export function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center px-7 py-2 md:p-5 max-w-9xl mx-auto">

          {/* Logo */}
          <h1 className="text-md md:text-xl font-bold hover:shadow-[0_0_20px_white] hover:text-white px-5 py-3 rounded-2xl duration-500 transition-all hover:scale-125 hover:translate-x-10">
            Quality Compliance Solutions
          </h1>

          {/* Desktop Menu */}
          <nav>
            <ul className="hidden md:flex gap-2">
              <Link href="/" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                Home
              </Link>

              <Link href="/sourcing" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                Sourcing
              </Link>

              {/* <Link href="/ContactUs" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                Services
              </Link> */}

              <Link href="/aqlLevel" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                AQL Level
              </Link>

              <Link href="/AboutUs" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                About Us
              </Link>

              <Link href="/ContactUs" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_white] hover:scale-80">
                Contact Us
              </Link>

              <Link href="/#" className="bg-white text-black text-xl ml-10 px-5 py-3 rounded-lg transition-all duration-300 hover:text-blue-600 hover:shadow-[0_0_20px_white] hover:scale-110">
                Get in Touch
              </Link>
            </ul>
          </nav>

          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

{/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-5 space-y-2">

          <Link href="/" onClick={closeMenu} className="block text-white py-2">
            Home
          </Link>

          <Link href="/sourcing" onClick={closeMenu} className="block text-white py-2">
            Sourcing
          </Link>

          {/* <Link href="/" onClick={closeMenu} className="block text-white py-2">
            Services
          </Link> */}

          <Link href="/aqlLevel" onClick={closeMenu} className="block text-white py-2">
            AQL Level
          </Link>

          <Link href="/AboutUs" onClick={closeMenu} className="block text-white py-2">
            About Us
          </Link>

          <Link href="/ContactUs" onClick={closeMenu} className="block text-white py-2">
            Contact Us
          </Link>

          <Link
            href="/#"
            onClick={closeMenu}
            className="block bg-white text-black py-2 px-3 rounded-lg text-center"
          >
            Get in Touch
          </Link>

          </div>
        )}
      </header>
    </main>
  );
}