import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Pokemon } from '../../types/pokemon-data-type';
import { PokemonStatsComponent } from './pokemon-stats-component';

describe("Components - Pokemon Stats Test", () => {
  const pokemon: Pokemon = {
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
  }

  const expectedIdsandResult = {
    '#stats-name': 'test-name',
    '#stats-id': "#1",
    '#stats-type': 'Type',
    '#header-HP': 'HP',
    '#header-Attack': 'Attack',
    '#header-Defense': 'Defense',
    '#header-Speed': 'Speed',
    '#value-hp': "1",
    '#value-attack': "1",
    '#value-defense': "1",
    '#value-speed': "1",
  };

  it('should render', () => {
    const component = render(
      <PokemonStatsComponent pokemonInfo={pokemon} />
    )
    expect(component).toBeTruthy();

    Object.entries(expectedIdsandResult).map(
      entry => {
        const [id, result] = entry;
        const element = component.container.querySelector(id);
        element ? 
          expect(element.textContent).toEqual(result):
          expect(element).toBeTruthy()
      }
    )
    const pictureElement = component.container.querySelector("#pokemon-picture");
    pictureElement ?
      expect(pictureElement.getAttribute('src')).toEqual(pokemon.picUrl) :
      expect(pictureElement).toBeTruthy()
  })
});