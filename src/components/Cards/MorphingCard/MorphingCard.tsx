import SimpleBadge from "@/components/Badges/SimpleBadge";
import {IProject} from '@/config/projects'
import { Button } from "@/components/ui/button"
interface CardProps {
  data: IProject
}

export default function MorphingCard({ data }: CardProps) {
  const imageUrl = data?.image?.startsWith("http")
    ? data?.image
    : `/images/${data?.image}`;

  return (
    <>
      <li
        className="min-w-[300px] min-h-[300px] w-[100%] md:w-[30%] aspect-square rounded-def bg-cyan-700 relative overflow-hidden bg-cover bg-center cursor-pointer morphing-card m-auto rounded"
      >
        <img src={imageUrl} alt="Project image" className="object-cover w-[100%] h-[100%] morphing-image" />
        <div className="absolute left-4 top-4 morphing-badge">
          <SimpleBadge badge={data?.type} />
        </div>
        <div className="absolute bottom-0 bg-black bg-opacity-70 w-[100%] h-[50px] flex items-center justify-center p-1 morphing-overlay">
          <h2 className="h4 text-center line-clamp-1 morphing-title">
            {data?.title}
          </h2>
        <Button className="morphing-button">Explore</Button>

        </div>
      </li>
    </>
  );
}
