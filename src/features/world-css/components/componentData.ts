import GlitchTextContainer from "./GlitchText/GlitchTextContainer";
import {
  IconSparkles,
  IconPalette,
  IconBoxMultiple,
  IconLoader,
  IconBrightnessUp,
  IconSelectAll,
  TablerIconsProps,
} from "@tabler/icons-react";
import { TSectionType } from "../store/useUIChange";

export interface IComponentData {
  title: string;
  value: TSectionType;
  icon: React.ComponentType<TablerIconsProps>;
  components: IIndividualComponent[];
}

export interface IIndividualComponent {
  title: string;
  value: string;
  icon: React.ComponentType<TablerIconsProps>;
  component: React.ComponentType;
}

export const componentData = [
  {
    title: "SFX",
    value: "sfx",
    icon: IconSparkles,
    components: [
      {
        title: "Glitch Effect",
        value: "glitch",
        icon: IconSelectAll,
        component: GlitchTextContainer,
      },
      {
        title: "Neon Effect",
        value: "neon",
        icon: IconBrightnessUp,
        component: "",
      },
      {
        title: "Fade Effect",
        value: "fade",
        icon: IconLoader,
        component: "",
      },
    ],
  },
  {
    title: "CSS Art",
    value: "art",
    icon: IconPalette,
    components: [
      {
        title: "CSS Phone",
        value: "phone",
        icon: "",
        component: "",
      },
    ],
  },
] as IComponentData[];
