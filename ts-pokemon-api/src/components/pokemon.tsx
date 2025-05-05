import { PokemonType } from "../utils/types";

const Pokemon = ({ id, name, image, types }: PokemonType) => {
  return (<div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-100" />
    <div className="font-bold text-2xl pb-2">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Types: {types.join(", ")}</p>
    </div>
  </div>);
}
export default Pokemon;
