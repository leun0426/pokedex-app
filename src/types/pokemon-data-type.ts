export type PokemonStat = {
  base_stat:Number;
  stat: {
    name:string;
  }
}

export type PokemonType = {
  type: {
    name: string;
  }
}

type PokemonSprites = {
  front_default: string
}

export type Pokemon = {
  name: string | undefined;
  id: Number | undefined;
  pokeTypes: string[] | undefined;
  stats: {
    hp: Number | undefined;
    attack: Number | undefined,
    defense: Number | undefined,
    speed: Number | undefined,
  }
  picUrl: string | null,
};