// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold text-blue-600">Aasia Salahuddin</h1>
    <ul className="hidden md:flex gap-8 font-semibold text-gray-700 dark:text-gray-300">
      {["home", "skills", "portfolio", "services", "contact"].map((item) => (
        <li key={item}>
          <a
            href={`#${item}`}
            className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
    <a
      href="/cv.pdf"
      download
      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow-lg transition"
    >
      Download CV
    </a>
  </div>
</nav>
 );
}
