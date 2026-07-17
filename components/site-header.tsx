"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-4 left-0 z-50 px-4 md:px-8">
      <nav className={`max-w-7xl mx-auto backdrop-blur-md border rounded-full text-white shadow-lg transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/85 border-white/5 py-1.5" 
          : "bg-black/25 border-white/10 py-2.5"
      }`}>
        <div className="flex md:grid md:grid-cols-3 items-center justify-between px-6 py-2.5">
          {/* Column 1: Logo */}
          <div className="flex justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="SkillKwiz Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-wide text-white">
                Skill<span className="text-[#f6c648]">Kwiz</span>
              </span>
            </Link>
          </div>

          {/* Column 2: Center Menus */}
          <div className="hidden md:flex justify-center items-center gap-6">
            <Link
              href="/"
              className={`relative group py-2 text-sm lg:text-base font-medium transition-colors ${
                pathname === "/" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f6c648] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-2 text-sm lg:text-base font-medium transition-colors ${
                pathname === "/about" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f6c648] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-2 text-sm lg:text-base font-medium transition-colors ${
                pathname === "/services" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f6c648] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-2 text-sm lg:text-base font-medium transition-colors ${
                pathname === "/blog" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f6c648] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>

          {/* Column 3: Right Side CTA */}
          <div className="flex items-center justify-end">
            <Link
              href="/services"
              className="hidden md:inline-flex items-center justify-center bg-[#f73e5d] text-white hover:bg-opacity-95 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all hover:scale-105"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none p-1 rounded-full hover:bg-white/10 transition-colors z-20"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4 bg-[#0a1931]/95 backdrop-blur-lg border border-white/10 rounded-2xl absolute top-14 left-4 right-4 shadow-2xl transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className={`py-3 text-lg font-medium w-full text-center ${
                pathname === "/" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`py-3 text-lg font-medium w-full text-center ${
                pathname === "/about" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`py-3 text-lg font-medium w-full text-center ${
                pathname === "/services" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`py-3 text-lg font-medium w-full text-center ${
                pathname === "/blog" ? "text-[#f6c648]" : "text-white/80 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/services"
              className="py-3 text-lg font-bold w-full text-center text-[#f73e5d] border-t border-white/10 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
