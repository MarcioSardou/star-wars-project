
const BASE_URL = 'https://swapi.tech/api';

export async function getMovies() {
  const response = await fetch(`${BASE_URL}/films?page=1&limit=50`, {
    next: { revalidate: 3600 }, 
  });

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data = await response.json();
  return data.result;
}

export async function getCharacters(page = 1, search = '') {
    const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
    const url = `https://swapi.dev/api/people/?page=${page}${searchParam}`;
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
  
    const data = await response.json();
  
    return {
      characters: data.results,
      totalPages: Math.ceil(data.count / 10), 
    };
  }