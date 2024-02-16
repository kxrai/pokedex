// src/components/Pokedex.tsx
import React from 'react';
import usePokemonList from '../hooks/usePokemonList';

const Pokedex: React.FC = () => {
  const { pokemons, loading } = usePokemonList();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
