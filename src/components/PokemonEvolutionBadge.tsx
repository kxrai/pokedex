// src/components/PokemonEvolutionChain.tsx
import React from 'react';

interface PokemonEvolutionChainProps {
  evolutionChain: any; // Define a proper type based on the data structure
}

const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({ evolutionChain }) => {
  // Map the evolution chain data to JSX here
  return (
    <div>
      {evolutionChain.map((evolution: any) => (
        <div key={evolution.id}>{evolution.speciesName}</div>
      ))}
    </div>
  );
};

export default PokemonEvolutionChain;
