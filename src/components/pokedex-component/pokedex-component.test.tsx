import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { PokedexComponent } from './pokedex-component';
import axios from 'axios';

describe("Components - Pokemon Stats Test", () => {
  it('should render', () => {
    const component = render(<PokedexComponent />);
    expect(component).toBeTruthy();
  })

  it('should show default unknown pokemon', () => {
    const expectedIdsandResult = {
      '#stats-name': 'Unknown Pokemon',
      '#stats-id': "#0",
      '#stats-type': 'Type',
      '#header-HP': 'HP',
      '#header-Attack': 'Attack',
      '#header-Defense': 'Defense',
      '#header-Speed': 'Speed',
      '#value-hp': "0",
      '#value-attack': "0",
      '#value-defense': "0",
      '#value-speed': "0",
    };
    const component = render(<PokedexComponent />);
    expect(screen.queryByPlaceholderText('Pokemon Name or Id')).toBeTruthy();
    expect(screen.queryByText('Search')).toBeTruthy();
    expect(component.container.querySelector('#pokemon-picture')).toBeTruthy()
    Object.entries(expectedIdsandResult).map(
      entry => {
        const [id, result] = entry;
        const element = component.container.querySelector(id);
        element ?
          expect(element.textContent).toEqual(result) :
          expect(element).toBeTruthy();
      }
    )
    
  })

  it('should show pokemon search returned', async() => {
    const fakePokemon = {data:{
      name: "Fake Pokemon",
      id: 1,
      types: [{type: {name: "fire"}}],
      stats: [
        { base_stat: 2, stat: { name: 'hp' } },
        { base_stat: 2, stat: { name: 'attack' } },
        { base_stat: 2, stat: { name: 'defense' } },
        { base_stat: 2, stat: { name: 'speed' } },
        ],
      sprites: { front_default: 'http://somewhereovertherainbow.com'}}
    }

    const expectedIdsandResult = {
      '#stats-name': 'Fake Pokemon',
      '#stats-id': "#1",
      '#stats-type': 'Type',
      '#header-HP': 'HP',
      '#type-Fire-0': 'Fire',
      '#header-Attack': 'Attack',
      '#header-Defense': 'Defense',
      '#header-Speed': 'Speed',
      '#value-hp': "2",
      '#value-attack': "2",
      '#value-defense': "2",
      '#value-speed': "2",
    };
    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation(url => {
      switch(url) {
        case 'https://pokeapi.co/api/v2/pokemon/test':
          return Promise.resolve(fakePokemon)
      }
      return Promise.resolve('testing');
    });

    const component = render(<PokedexComponent />);
    const inputElement = screen.queryByPlaceholderText('Pokemon Name or Id');

    if (inputElement) {
      await act(async() => userEvent.type(inputElement, 'test'));
      await expect(inputElement).toHaveValue('test');
      const button = screen.queryByText('Search');
      button ? await act(async () => fireEvent.click(button)) : expect(button).toBeTruthy();
      await expect(screen.queryByText('Fake Pokemon')).toBeTruthy();
      Object.entries(expectedIdsandResult).map(
        entry => {
          const [id, result] = entry;
          const element = component.container.querySelector(id);
          element ?
            expect(element.textContent).toEqual(result) :
            expect(element).toBeTruthy()
        }
      )
    } else {
      expect(inputElement).toBeTruthy();
    }
  })
});
