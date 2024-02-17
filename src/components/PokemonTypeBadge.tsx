// src/components/PokemonTypeBadge.tsx
import React from 'react';

interface PokemonTypeBadgeProps {
  type: string; // Assuming the type is a string like "fire", "water", etc.
}

const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({ type }) => {
  return <span className={`badge badge-${type}`}>{type}</span>;
};

export default PokemonTypeBadge;
