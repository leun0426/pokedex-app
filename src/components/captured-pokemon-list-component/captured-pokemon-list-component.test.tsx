import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Pokemon } from '../../types/pokemon-data-type';
import { CapturedPokemonList } from './captured-pokemon-list-component';

describe("Components - Captured Pokemon List Test", () => {
  const pokemonList: Pokemon[] = [{
    name: 'test-name',
    id: 1,
    pokeTypes: ['test type'],
    stats: {
      hp: 1,
      attack: 1,
      defense: 1,
      speed: 1,
    },
    picUrl: 'test.com'
  }];

  it('should render and run function when image is clicked', () => {
    const handlePokemon = (index: number) => {
      expect(index).toEqual(0);
    }
    const component = render(
      <CapturedPokemonList 
        pokemonList={pokemonList}
        handleReleasePokemon={handlePokemon} />)
    const pokemon = component.container.querySelector('#pokemon-0');
    if (pokemon) {
      fireEvent.click(pokemon)
    } else {
      expect(pokemon).toBeTruthy();
    }
  })
});
