import GlitchTextContainer from "./GlitchText/GlitchTextContainer";
import {
  IconSparkles,
  IconPalette,
  IconBoxMultiple,
  IconSwitchHorizontal,
  IconBrightnessUp,
  IconSelectAll,
  IconIcons,
  IconLayoutGrid,
  TablerIconsProps,
  IconDeviceMobile,
  IconColorPicker,
  IconArrowMoveUp,
} from "@tabler/icons-react";
import { TSectionType, TComponentType } from "../store/useUIChange";
import NeonTextContainer from "./NeonText/NeonTextContainer";
import CssPhoneContainer from "./CssPhone/CssPhoneContainer";
import SquareBackgroundContainer from "./SquareBackgroundGeneration/SquareBackgroundContainer";
import IconBackgroundContainer from "./IconBackgroundGeneration/IconBackgroundContainer";
import SwitchingTextContainer from "./SwitchingText/SwitchingTextContainer";
import RandomColourTextContainer from "./RandomColourText/RandomColourTextContainer";

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
    title: "Text SFX",
    value: "tsfx",
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
        title: "Switching",
        value: "switch",
        icon: IconSwitchHorizontal,
        component: SwitchingTextContainer,
      },
      {
        title: "Rdn Colour",
        value: "ranCol",
        icon: IconColorPicker,
        component: RandomColourTextContainer,
      },
      // {
      //   title: "Moving",
      //   value: "move",
      //   icon: IconArrowMoveUp,
      //   component: "",
      // },
    ],
  },
  {
    title: "Background",
    value: "background",
    icon: IconBoxMultiple,
    components: [
      {
        title: "Icons",
        value: "bIcons",
        icon: IconIcons,
        component: IconBackgroundContainer,
      },
      {
        title: "Squares",
        value: "bSquares",
        icon: IconLayoutGrid,
        component: SquareBackgroundContainer,
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
