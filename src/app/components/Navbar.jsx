"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "https://about.seaneb.com/about", external: true },
    { name: "Forum", href: "https://about.seaneb.com/forum", external: true },
    { name: "Solutions", dropdown: true },
    { name: "Blogs", href: "https://about.seaneb.com/blog/our-blog-1", external: true },
    { name: "Contact", href: "https://about.seaneb.com/contact", external: true },
  ];

  const solutions = [
    {
      name: "Tiffin Service App",
      tagline: "Daily & Healthy Meal Services",
      logo: "/tiffin-logo.png",
      href: "https://about.seaneb.com/tiffin-service-app",
    },
    {
      name: "SeaNeB App",
      tagline: "Empowering Local Economy",
      logo: "/seaneb-logo.png",
      href: "https://about.seaneb.com/seaneb-app",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-black/40"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="SeaNeB Logo"
                className="h-12 w-auto sm:h-14 md:h-16"
                loading="eager"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <li
                    key="Solutions"
                    className="relative group"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      className="text-white text-sm lg:text-base hover:text-yellow-300 transition duration-200 flex items-center"
                      aria-haspopup="true"
                      aria-expanded={solutionsOpen}
                    >
                      Solutions <span className="ml-1 text-xs">▼</span>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 mt-2 w-80 bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                        solutionsOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      {solutions.map((sol) => (
                        <a
                          key={sol.name}
                          href={sol.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
                        >
                          <img
                            src={sol.logo}
                            alt={sol.name}
                            className="w-10 h-10 rounded-md"
                          />
                          <div className="flex flex-col text-left">
                            <span className="font-medium text-sm">{sol.name}</span>
                            <span className="text-xs text-gray-500">{sol.tagline}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-white text-sm lg:text-base hover:text-yellow-300 transition duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-md text-white transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <li key="Solutions" className="w-full text-center">
                  <details className="group w-full">
                    <summary className="cursor-pointer text-base font-medium hover:text-yellow-300">
                      Solutions
                    </summary>
                    <div className="mt-3 w-full px-6 flex flex-col items-start space-y-3">
                      {solutions.map((sol) => (
                        <a
                          key={sol.name}
                          href={sol.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center w-full gap-3 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg transition-all"
                          onClick={() => setMenuOpen(false)}
                        >
                          <img
                            src={sol.logo}
                            alt={sol.name}
                            className="w-9 h-9 rounded-md flex-shrink-0"
                          />
                          <div className="flex flex-col items-start text-left">
                            <span className="text-sm font-semibold text-white">
                              {sol.name}
                            </span>
                            <span className="text-xs text-gray-300">{sol.tagline}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block w-full text-center hover:text-yellow-300 transition text-base"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
