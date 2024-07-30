import { useQuery } from "@tanstack/react-query";
import { getStarters } from "../../services/gameLogic";
import Image from "next/image";

export default function StarterSelection() {
  const {
    data: starters,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["starters"],
    queryFn: () => getStarters(),
  });

  console.log(
    "%c response!",
    "background: #01579b; color: white; padding: 2px 4px; border-radius: 4px"
  );
  console.log(starters);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="h3 mb-4 text-center">Select 6 Starters</h2>
      <div className="flex flex-col gap-2 m-auto text-center">
        <h4>Your starting team:</h4>
        <div className="flex items-center"></div>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {starters?.map((region) => (
          <div className="flex flex-col gap-4 mb-4" key={region.region}>
            <h4>{region.region}</h4>
            <div className="flex gap-4">
              {region.pokemon.map((starter) => (
                <div
                  key={starter.id}
                  className="flex flex-col items-center opacity-50 relative rounded bg-neutral-900 hover:opacity-100 cursor-pointer"
                >
                  <Image
                    src={starter.front_image}
                    width={100}
                    height={100}
                    alt={starter.name}
                  />
                  <h5 className="text-sm absolute bottom-2">{starter.name}</h5>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
