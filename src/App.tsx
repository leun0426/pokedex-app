import React from 'react';
import {PokedexComponent} from './components/pokedex-component/pokedex-component';
import { ChakraProvider } from '@chakra-ui/react';
import { PokedexTheme } from './styles/pokedex-styles';

function App() {
  return (
    <ChakraProvider resetCSS theme={PokedexTheme}>
      <PokedexComponent />
    </ChakraProvider>
  );
}

export default App;
