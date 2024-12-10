import { Button } from "@/components/ShadcnUi/Button";
import { cn } from "@/utils/utils";

export interface IActionableListItemProps {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  label: string;
  labelType: "green" | "blue";
  buttonText: string;
  buttonIcon: React.ElementType;
  isButtonDisabled?: boolean;
}

/**
 * ActionableListItem renders a list item with an icon, title, description, a customizable label, and a button that links to a specified URL.
 *
 * ```javascript
 * import ActionableListItem from "@/components/Lists/ActionableListItem";
 * import { FaExternalLinkAlt } from "react-icons/fa";
 * import { FaRocket } from "react-icons/fa";
 *
 * <ActionableListItem
 *   title="Launch Project"
 *   description="Start your project with all necessary tools and guides."
 *   link="https://example.com/project"
 *   icon={FaRocket}
 *   label="Active"
 *   labelType="green"
 *   buttonText="Open"
 *   buttonIcon={FaExternalLinkAlt}
 *   isButtonDisabled={false}
 * />
 * ```
 */
export default function ActionableListItem({
  title,
  description,
  link,
  icon: IconComponent,
  label,
  labelType,
  buttonText,
  buttonIcon: ButtonIcon,
  isButtonDisabled = false,
}: IActionableListItemProps) {
  return (
    <li className="border-cyan-900 border-[2px] border-solid flex flex-col md:flex-row items-center gap-4 w-[100%] max-w-[800px] p-4 rounded-lg">
      {IconComponent && <IconComponent size="40" className="shrink-0" />}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <span
            className={cn(
              "capitalize pointer-events-none inline-flex items-center rounded-md px-2.5 py-0.5 text-xs",
              labelType === "green"
                ? "bg-emerald-900 text-emerald-400"
                : "bg-sky-900 text-sky-300"
            )}
          >
            {label}
          </span>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
      <div>
        <Button
          asChild
          variant="secondary"
          disabled={isButtonDisabled}
          className={cn({
            "pointer-events-none opacity-50": isButtonDisabled,
          })}
        >
          <a href={link} className="flex gap-2 items-center h-[unset]">
            <ButtonIcon />
            <small className="text-base font-bold">{buttonText}</small>
          </a>
        </Button>
      </div>
    </li>
  );
}
