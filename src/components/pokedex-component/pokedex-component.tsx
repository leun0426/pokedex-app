import React, { useState } from 'react';
import axios from 'axios';
import { ButtonComponent } from '../button-component/button-component';
import { CapturedPokemonList } from '../captured-pokemon-list-component/captured-pokemon-list-component';
import { PokemonStatsComponent } from '../pokemon-stats-component/pokemon-stats-component';
import { SearchComponent } from '../search-component/search-component';
import PokemonDbInfo from '../../resources/pokemon-db-info.json'
import { Pokemon, PokemonStat, PokemonType } from '../../types/pokemon-data-type';
import i18n from '../../resources/i18n.json';
import { Card } from '@chakra-ui/react';
import UnknownPokemon from '../../resources/unknownPokemon.json';

export const  PokedexComponent = () => {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>(UnknownPokemon)
  const [pokemonList, updatePokemonList] = useState<Pokemon[]>([])

  function getName(name: String) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1,)}` || undefined;
  }

  function getStat(statsArray: PokemonStat[], statType: string) {
    const result:PokemonStat | undefined = statsArray?.find(entry => entry.stat.name === statType);
    return result?.base_stat;
  }

  function searchPokemon(pokemonQuery:string | Object | null) {
    if (typeof(pokemonQuery) === 'string') {
      axios
        .get(`${PokemonDbInfo.pokemonDb}${pokemonQuery.toLowerCase()}`)
        .then(
          res => {
            const { data } = res;
            setPokemonInfo({
              name: getName(data.name),
              id: data.id || null,
              stats: {
                hp: getStat(data.stats, 'hp'),
                attack: getStat(data.stats, 'attack'),
                defense: getStat(data.stats, 'defense'),
                speed: getStat(data.stats, 'speed'),
              },
              pokeTypes: data?.types.map((pokeType: PokemonType) => {
                const { name } = pokeType.type
                return `${name.charAt(0).toUpperCase()}${name.slice(1,)}`;
              }),
              picUrl: data.sprites?.front_default || null,
            })
          },
          error => {
            setPokemonInfo(UnknownPokemon);
          }
        )
    } else {
      setPokemonInfo(UnknownPokemon);
    }
  }

  function capturePokemon() {
    if (pokemonInfo && pokemonInfo.picUrl && pokemonList.length < 6) {
      updatePokemonList(list => [...list, pokemonInfo]);
    }
  }

  function releasePokemon(index: number) {
    const pokemonListCopy = JSON.parse(JSON.stringify(pokemonList))
    pokemonListCopy.splice(index, 1);
    updatePokemonList(() => [...pokemonListCopy]);
  }

  return (
    <div className='pokemon-app-wrapper'>
      <Card>
        <div>
          <SearchComponent id='pokemon-search' placeholder={i18n['pokemon-search-placeholder']} handleSearch={searchPokemon}/>
        </div>
        <div className='pokemon-stats-wrapper'>
          <PokemonStatsComponent pokemonInfo={pokemonInfo}/>
        </div>
        <div className='pokemon-capture-wrapper'>
          <ButtonComponent id='pokemon-capture-button' buttonName={i18n['capture']} handleClick={() => capturePokemon()} />
        </div>
      </Card>
      <Card className='pokemon-capture-list-wrapper'>
        <CapturedPokemonList handleReleasePokemon={releasePokemon} pokemonList={pokemonList}/>
      </Card>
    </div>
  );
}