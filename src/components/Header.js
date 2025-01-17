import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white fixed w-screen">
      <div className="w-full max-w-7xl mx-auto flex justify-center py-4 px-6">
        <nav className="flex space-x-10">
          <a
            href="/"
            className="hover:text-yellow-500 transition-colors text-lg font-bold"
          >
            HOME
          </a>
          <a
            href="/movies"
            className="hover:text-yellow-500 transition-colors text-lg font-bold"
          >
            MOVIES
          </a>
          <a
            href="/characters"
            className="hover:text-yellow-500 transition-colors text-lg font-bold"
          >
            CHARACTERS
          </a>
        </nav>
      </div>
    </header>
  );
}