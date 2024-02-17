// src/hooks/usePokemonList.ts
import { useState, useEffect } from 'react';

interface PokemonSimple {
  id: number;
  name: string;
}

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonSimple[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const data = await response.json();
        const simplePokemons = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          name: pokemon.name
        }));
        setPokemons(simplePokemons);
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading };
};

export default usePokemonList;


