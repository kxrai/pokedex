// src/components/PokemonDetails.tsx
import React from 'react';
import usePokemonDetails from '../hooks/usePokemonDetails';
import pokeballIcon from './assets/pokeball-icon.png';

interface PokemonDetailsProps {
  pokemonId: number;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonId }) => {
  const { details, loading } = usePokemonDetails(pokemonId);

  if (loading) return <div>Loading details...</div>;
  if (!details) return <div>Pokemon details not found.</div>;

  return (
    <div>
      <h2>{details.name}</h2>
      {/* Display more details here */}
    </div>
  );
};

export default PokemonDetails;
