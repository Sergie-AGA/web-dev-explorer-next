import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStarters } from "../../services/starterLogic";
import Image from "next/image";
import { IPokemonData } from "../../types/IPokemon";
import { IconHelpHexagonFilled, IconX } from "@tabler/icons-react";
import { Button } from "@/components/ShadcnUi/Button";

export default function StarterSelection() {
  const {
    data: starters,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["starters"],
    queryFn: () => getStarters(),
  });

  const [selectedStarters, setSelectedStarters] = useState<IPokemonData[]>([]);

  const handleSelectStarter = (starter: IPokemonData) => {
    if (
      selectedStarters.length < 6 &&
      !selectedStarters.some((s) => s.id === starter.id)
    ) {
      setSelectedStarters([...selectedStarters, starter]);
    }
  };

  const handleRemoveStarter = (starter: IPokemonData) => {
    setSelectedStarters(selectedStarters.filter((s) => s.id !== starter.id));
  };

  const renderStarterSlots = () => {
    const slots = [];
    for (let i = 0; i < 6; i++) {
      if (i < selectedStarters.length) {
        const starter = selectedStarters[i];
        slots.push(
          <div
            key={starter.id}
            className="flex flex-col items-center opacity-100 relative rounded bg-neutral-900 cursor-pointer group"
            onClick={() => handleRemoveStarter(starter)}
          >
            <IconX
              size="16"
              className="absolute right-2 top-2 opacity-0 group-hover:opacity-100"
            />
            <Image
              src={starter.front_image}
              width={100}
              height={100}
              alt={starter.name}
            />
            <h5 className="text-sm absolute bottom-2 capitalize">
              {starter.name}
            </h5>
          </div>
        );
      } else {
        slots.push(
          <div
            key={`empty-${i}`}
            className="flex flex-col items-center opacity-50 relative rounded bg-neutral-900"
            style={{ width: 100, height: 100 }}
          >
            <div className="flex items-center justify-center h-full w-full">
              <IconHelpHexagonFilled />
            </div>
          </div>
        );
      }
    }
    return slots;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="h3 mb-4 text-center">Select 6 Starters</h2>
      <div className="flex flex-col items-center gap-4 m-auto text-center">
        <h4>Your starting team:</h4>
        <div className="flex items-center gap-2">{renderStarterSlots()}</div>
        <Button disabled={selectedStarters.length < 6} variant="secondary">
          Start Journey
        </Button>
      </div>
      <div className="flex justify-center gap-8 flex-wrap mt-4">
        {starters?.map((region) => (
          <div className="flex flex-col gap-4 mb-4" key={region.region}>
            <h4>{region.region}</h4>
            <div className="flex gap-4">
              {region.pokemon.map((starter) => (
                <div
                  key={starter.id}
                  className={`flex flex-col items-center ${
                    selectedStarters.some((s) => s.id === starter.id)
                      ? "opacity-100"
                      : "opacity-50"
                  } relative rounded bg-neutral-900 hover:opacity-100 cursor-pointer`}
                  onClick={() => handleSelectStarter(starter)}
                >
                  <Image
                    src={starter.front_image}
                    width={100}
                    height={100}
                    alt={starter.name}
                  />
                  <h5 className="text-sm absolute bottom-2 capitalize">
                    {starter.name}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
