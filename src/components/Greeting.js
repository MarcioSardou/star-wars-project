import React from "react";
import { Film, Users } from 'lucide-react';
import Link from 'next/link'
 



export default function Greeting() {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen w-full bg-gradient-to-b from-gray-900 to-blue-900 text-white p-4 ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 tracking-wider">
        May the Force be with you.
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-200">
        Explore the galaxy far, far away.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/movies">
        <button className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <Film className="mr-2" size={24} />
          LIST OF MOVIES
        </button>
      </Link>
      <Link href="/characters">
        <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <Users className="mr-2" size={24} />
          LIST OF CHARACTERS
        </button>
        </Link>
      </div>
    </div>
  );
}

