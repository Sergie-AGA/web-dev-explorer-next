import GlitchTextContainer from "./GlitchText/GlitchTextContainer";
import {
  IconSparkles,
  IconPalette,
  IconBoxMultiple,
  IconLoader,
  IconBrightnessUp,
  IconSelectAll,
  IconIcons,
  IconLayoutGrid,
  TablerIconsProps,
  IconDeviceMobile,
} from "@tabler/icons-react";
import { TSectionType, TComponentType } from "../store/useUIChange";
import NeonTextContainer from "./NeonText/NeonTextContainer";
import CssPhoneContainer from "./CssPhone/CssPhoneContainer";

export interface IComponentData {
  title: string;
  value: TSectionType;
  icon: React.ComponentType<TablerIconsProps>;
  components: IIndividualComponent[];
}

export interface IIndividualComponent {
  title: string;
  value: TComponentType;
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
        title: "Glitch",
        value: "glitch",
        icon: IconSelectAll,
        component: GlitchTextContainer,
      },
      {
        title: "Neon",
        value: "neon",
        icon: IconBrightnessUp,
        component: NeonTextContainer,
      },
      {
        title: "Fade",
        value: "fade",
        icon: IconLoader,
        component: "",
      },
    ],
  },
  {
    title: "Background",
    value: "background",
    icon: IconBoxMultiple,
    components: [
      {
        title: "Icons",
        value: "icons",
        icon: IconIcons,
        component: "",
      },
      {
        title: "Squares",
        value: "squares",
        icon: IconLayoutGrid,
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
        title: "Phone",
        value: "phone",
        icon: IconDeviceMobile,
        component: CssPhoneContainer,
      },
    ],
  },
] as IComponentData[];
