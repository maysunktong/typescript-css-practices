import FetchButton from "./fetchButton";

const Pokemon = ({ id, name, image, types, onClick }: PokemonProps & FetchButtonProps) => {
  return (<div className="flex flex-col items-center">
    <img src={image} alt={name} className="w-100" />
    <div className="font-bold text-2xl pb-2">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Types: {types.join(", ")}</p>
    </div>
    <FetchButton onClick={onClick} />
  </div>);
}
export default Pokemon;
