import SimpleBadge from "@/components/Badges/SimpleBadge";
import { IProject } from "@/config/projects";
import { Button } from "@/components/ShadcnUi/Button";
import { generateImageUrl } from "@/utils/imageHelpers";
import { forwardRef } from "react";
import "./morphing-card.css";

export interface ICardProps {
  data: IProject;
  onClick?: () => void | undefined;
}

/**
 * MorphingCard renders an interactive card with a morphing effect, displaying a project image, a badge indicating the project type, and a title overlay with an optional action button.
 *
 * ```javascript
 * import MorphingCard from "@/components/Cards/MorphingCard/MorphingCard";
 *
 * <MorphingCard
 *   data={{
 *     title: "Project Alpha",
 *     type: "design",
 *     image: "/images/project-alpha.jpg",
 *   }}
 *   onClick={() => alert("Card clicked!")}
 * />
 * ```
 */
const MorphingCard = forwardRef<HTMLDivElement, ICardProps>(
  ({ data, onClick }, ref) => {
    const imageUrl = generateImageUrl(data?.image);

    return (
      <div
        ref={ref}
        data-testid={`morphing-card`}
        onClick={onClick}
        className="min-w-[250px] min-h-[250px] w-[100%] md:w-[20%] aspect-square rounded-def bg-cyan-700 relative overflow-hidden bg-cover bg-center cursor-pointer morphing-card m-auto rounded shadow-lg"
      >
        <img
          src={imageUrl}
          alt="Project image"
          className="object-cover w-[100%] h-[100%] morphing-image"
        />
        <div className="absolute left-4 top-4 morphing-badge">
          <SimpleBadge badge={data?.type} />
        </div>
        <div className="absolute bottom-0 bg-black bg-opacity-70 w-[100%] h-[50px] flex items-center justify-center p-1 morphing-overlay">
          <h2 className="h5 md:h4 text-center line-clamp-1 morphing-title">
            {data?.title}
          </h2>
          <Button className="morphing-button">Explore</Button>
        </div>
      </div>
    );
  }
);

MorphingCard.displayName = "MorphingCard";

export default MorphingCard;
