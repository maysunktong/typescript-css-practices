'use client'
import { PokemonType } from "@/utils/types";
import { useState, useEffect } from "react";
import Pokemon from "../components/pokemon";

export default function Home() {
  const [caughtPokemon, setCaughtPokemon] = useState<PokemonType | null>(null);

  const fetchPokemon = async (): Promise<void> => {
    try {
      const randomNumber: number = Math.floor(Math.random() * 151) + 1;
      const API_URL: string = "https://pokeapi.co/api/v2"
      const response: Response = await fetch(`${API_URL}/pokemon/${randomNumber}`);
      const data = await response.json();

      // extract data to match with types.ts
      const pokemonData: PokemonType = {
        id: data.id,
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        image: data.sprites["front_default"],
        types: data.types.map((item: { type: { name: string } }) => item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1))
      }

      console.log("Randomed Pokemon", pokemonData);
      setCaughtPokemon(pokemonData);

    } catch (error) {
      console.log(`Something went wrong ‼️, ${error}`);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, []);

  return (
    <div className="bg-amber-100 grow flex flex-col items-center">
      {caughtPokemon && (
        <div className="flex flex-col items-center">
          <Pokemon {...caughtPokemon} /> {/* if all types matched, use spread op */}
          <button type="button" onClick={fetchPokemon} className="border-2 border-green-700 bg-green-300 font-bold rounded-3xl p-4 uppercase">Randomize a    Pokemon
          </button>
        </div>
      )}
    </div>
  );
}
