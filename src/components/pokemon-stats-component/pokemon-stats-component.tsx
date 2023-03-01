import React from 'react';
import { Pokemon } from '../../types/pokemon-data-type';
import i18n from '../../resources/i18n.json'
import style from './pokemon-stats-component.module.css'
import unknownPokemonImg from '../../resources/unknownPokemon.png'

type pokemonStatProp = {
  pokemonInfo: Pokemon | undefined;
}
export const PokemonStatsComponent: React.FC<pokemonStatProp> = ({ pokemonInfo }) => {

  const { name, id, pokeTypes, stats, picUrl } = pokemonInfo || {};
  const pokemonStatValue = 'pokemon-stats';

  return (
    <>
      <div className={style.pokemonImgNameTypeWrapper}>
        <div>
          <img alt="" className={style.pokemonImg} id='pokemon-picture' src={picUrl || unknownPokemonImg} />
        </div>
        <div className={style.pokemonNameTypeWrapper}>
          <div>
            <label className={style.statsName} id='stats-name'>{name}</label>
          </div>
          <div>
            <label id='stats-id'>{`#${id}`}</label>
          </div>
          <div>
            <div>
              <label className={style.statsId} id='stats-type'>{i18n[pokemonStatValue].type}</label>
            </div>
            
            {pokeTypes?.map((pokeType, index) => {
              return (
                <label 
                  className={style.statType}
                  id={`type-${pokeType}-${index}`}
                  key={`type-${pokeType}-${index}`}>{pokeType}
                </label>)
            })}
          </div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            {Object.values(i18n[pokemonStatValue]['stats']).map(
              statName => {
                return (
                  <th className=''
                    id={`header-${statName}`}
                    key={`header-${statName}`}>
                    {statName}
                  </th>
                )
              }
            )}
          </tr>
          <tr>
            {Object.entries(stats || []).map(
              statsEntry => {
                return (
                  <td
                    id={`value-${statsEntry[0]}`}
                    key={`value-${statsEntry[0]}`}>
                    {statsEntry[1]?.toString()}
                  </td>)
              }
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
}