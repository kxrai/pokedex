// src/hooks/usePokemonList.ts
import { useState, useEffect } from 'react';

interface PokemonBasicInfo {
  id: number;
  name: string;
  types: string[];
}

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonBasicInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=898';
      try {
        const response = await fetch(url);
        const data = await response.json();
        const pokemonList = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          types: [] // Placeholder, as types need a separate API call
        }));
        setPokemons(pokemonList);
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  return { pokemons, loading };
};

export default usePokemonList;
