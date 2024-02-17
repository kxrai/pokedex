// import React, { useState } from 'react';
// import usePokemonList from '../hooks/usePokemonList';
// import SearchBar from './SearchBar'; // Make sure this import path is correct

// const Pokedex: React.FC = () => {
//   const { pokemons, loading } = usePokemonList();
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (query: string) => {
//     setSearchTerm(query.toLowerCase());
//   };

//   // Filter the pokemons list based on the searchTerm
//   const filteredPokemons = pokemons.filter(pokemon =>
//     pokemon.name.toLowerCase().includes(searchTerm)
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Pokédex</h1>
//       <SearchBar onSearch={handleSearch} /> {/* Render the SearchBar here */}
//       <ul>
//         {filteredPokemons.map(pokemon => (
//           <li key={pokemon.id}>{pokemon.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pokedex;
// src/components/Pokedex.tsx
// src/components/Pokedex.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Make sure this import path matches your file structure
import usePokemonList from '../hooks/usePokemonList'; // Adjust the path as necessary

const Pokedex: React.FC = () => {
  const { pokemons, loading } = usePokemonList();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemons = searchTerm
    ? pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : pokemons;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Pokédex</h1>
      <SearchBar onSearch={setSearchTerm} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPokemons.map(pokemon => (
            <li key={pokemon.id} className="bg-white p-6 shadow-md rounded-md">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pokedex;


