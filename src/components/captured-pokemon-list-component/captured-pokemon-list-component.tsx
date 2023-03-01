import React from 'react';
import { Pokemon } from '../../types/pokemon-data-type';
import style from './captured-pokemon-list-component.module.css';

type CapturedPokemonListProp = {
  pokemonList: Pokemon[];
  handleReleasePokemon: (index: number) => void
}

export const CapturedPokemonList: React.FC<CapturedPokemonListProp> = 
  ({pokemonList, handleReleasePokemon}) => {
  return (
    <>
      <div className='pokemon-list-img-wrapper'>
        {pokemonList.map((pokemon, index) => {
          return (
            <div className={style.pokemonImgWrapper} key={`captured-pokemon-${index}`}>
              <img alt="" className={style.pokemonImg} id={`pokemon-${index}`} onClick={() => handleReleasePokemon(index)} src={pokemon.picUrl || ''} />
            </div>
          )
        })}
      </div>
    </>
  )
}