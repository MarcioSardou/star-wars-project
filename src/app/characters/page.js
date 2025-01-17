'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchCharacters } from './actions';
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useDebounce } from '@/hook/useDebouce';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [debouncedSearch] = useDebounce(searchTerm, 300); // Debounce de 300ms para melhorar UX

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);
      try {
        const data = await fetchCharacters(currentPage, debouncedSearch); // Passa o termo filtrado
        setCharacters(data.characters);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Failed to fetch characters:', error);
      }
      setLoading(false);
    }

    loadCharacters();
  }, [currentPage, debouncedSearch]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-20 px-8">
      <Link href="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-6">
        <ArrowLeft className="mr-2" size={24} />
        Back to Home
      </Link>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 md:mb-0">Star Wars Characters</h1>
        
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800 border-gray-700 text-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
        </div>
      ) : characters?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {characters.map((character) => (
              <div key={character.name} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <span className="text-yellow-400">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="text-yellow-400 border-yellow-400 hover:bg-yellow-400/10"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-yellow-400 text-xl">No characters found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}