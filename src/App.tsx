// import React from 'react';
// import Pokedex from './components/Pokedex'; // Import the Pokedex component

// const App: React.FC = () => {
//   return (
//     <div>
//       <Pokedex />
//     </div>
//   );
// };

// export default App;
// src/App.tsx
import React from 'react';
import Pokedex from './components/Pokedex';
import './index.css'; // This is where TailwindCSS is imported
import pokeballIcon from './assets/pokeball-icon.png';

const App: React.FC = () => {
  return (
    <div>
      <Pokedex />
    </div>
  );
};

export default App;
