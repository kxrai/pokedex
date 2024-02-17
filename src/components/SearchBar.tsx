// // src/components/SearchBar.tsx
// import React, { useState } from 'react';

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value); // Call the onSearch prop with the new query
//   };

//   return (
//     <input
//       type="text"
//       value={query}
//       onChange={handleChange}
//       placeholder="Search Pokémon"
//     />
//   );
// };

// export default SearchBar;

import React from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={(e) => onSearch(e.target.value)}
        className="input border border-gray-300 p-2 rounded-lg w-full max-w-md"
      />
    </div>
  );
};

export default SearchBar;
