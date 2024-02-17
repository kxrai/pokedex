// src/hooks/usePokemonDetails.ts
import { useState, useEffect } from 'react';

interface PokemonDetails {
  // Define the details you need, e.g., id, name, types, weight, height, etc.
  id: number;
  name: string;
  weight: number;
  height: number;
  // Add other properties as per the API response
}

const usePokemonDetails = (pokemonId: number) => {
  const [details, setDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => {
        // Map the data to your PokemonDetails interface
        setDetails({
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          // Set other details from data
        });
      })
      .catch(error => {
        console.error('Error fetching Pokemon details:', error);
        setDetails(null);
      })
      .finally(() => setLoading(false));
  }, [pokemonId]);

  return { details, loading };
};

export default usePokemonDetails;
