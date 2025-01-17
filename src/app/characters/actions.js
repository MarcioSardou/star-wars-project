'use server'

import { getCharacters } from '@/lib/api';

export async function fetchCharacters(page, search) {
  return getCharacters(page, search);
}

