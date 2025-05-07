'use client'

import { useState, useEffect } from "react";
import Pokemon from "../components/pokemon";


export default function Home() {
  const [caughtPokemon, setCaughtPokemon] = useState<PokemonProps | null>(null);

  const fetchPokemon = async (): Promise<void> => {
    try {
      const randomNumber: number = Math.floor(Math.random() * 151) + 1;
      const API_URL: string = "https://pokeapi.co/api/v2"
      const response: Response = await fetch(`${API_URL}/pokemon/${randomNumber}`);
      const data = await response.json();

      // extract data to match with types.ts
      const pokemonData: PokemonProps = {
        id: data.id,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        image: data.sprites["front_default"],
        types: data.types.map((item: { type: { name: string } }) => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1))
      }
      setCaughtPokemon(pokemonData);
    } catch (error) { /*  block runs only if there’s an error inside the try block. */
      console.log(`Something went wrong ‼️, ${error}`);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, []);

  return (
    <div className="bg-amber-100 grow flex flex-col items-center may:bg-pink-300">
      {caughtPokemon && (
        <div className="flex flex-col items-center">
          <Pokemon {...caughtPokemon} onClick={fetchPokemon} />
        </div>
      )}
    </div>
  );
}
