'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getMovies } from '@/lib/api';
import { Input } from "@/components/Input"; // Supondo que você tenha um componente de Input

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Carregar os filmes inicialmente
  useEffect(() => {
    async function loadMovies() {
      const data = await getMovies();
      setMovies(data);
      setFilteredMovies(data); // Inicialmente, mostrar todos os filmes
    }

    loadMovies();
  }, []);

  // Filtrar filmes sempre que o termo de pesquisa mudar
  useEffect(() => {
    const result = movies.filter(movie =>
      movie.properties.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(result);
  }, [searchTerm, movies]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-20 px-8">
      <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
        <ArrowLeft className="mr-2" size={24} />
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Star Wars Movies</h1>

        {/* Barra de pesquisa */}
        <div className="relative w-full md:w-64 mb-6">
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white"
          />
        </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMovies.map((movie) => (
          <div key={movie.properties.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{movie.properties.title}</h2>
            <p className="text-blue-300">Release Year: {movie.properties.release_date.substring(0, 4)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}