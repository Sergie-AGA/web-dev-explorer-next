"use client";

import { useQuery } from "@tanstack/react-query";
import { getSinglePokemonByID } from "../../services/pokemonService";
import { useState } from "react";

export default function StarterSelection() {
  const [starters, setStarters] = useState("");

  const {
    data: startersList,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["starters"],
    queryFn: () => getSinglePokemonByID(1),
  });

  console.log(
    "%c Logged!",
    "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
  );
  console.log(startersList);

  const test = [
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
    {
      region: "Kanto",
      starters: [
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
        {
          id: 1,
          name: "test",
          imgSrc:
            "https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png",
        },
      ],
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="h3 mb-4 text-center">Select 6 Starters</h2>
      <div className="flex flex-col gap-2">
        <h4>Your starting team:</h4>
        <div className="flex items-center"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
}
