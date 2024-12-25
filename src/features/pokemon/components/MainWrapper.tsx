import ButtonTabs from "@/components/Tabs/ButtonTabs";
import MainHub from "@/features/pokemon/components/MainHub/MainHub";
import {
  IconMap2,
  IconPokeball,
  IconBook,
  IconIdBadge2,
  IconTrophy,
  IconSettings,
} from "@tabler/icons-react";
import TicketsBadge from "./MainHub/TicketsBadge";

export default function MainWrapper() {
  const tabData = [
    {
      title: "Adventure",
      value: "adventure",
      icon: <IconMap2 size={16} />,
      content: <MainHub />,
    },
    {
      title: "Manage Pokémon",
      value: "manage",
      icon: <IconPokeball size={16} />,
      content: <div>Manage Pokémon Content</div>,
    },
    {
      title: "Pokédex",
      value: "pokedex",
      icon: <IconBook size={16} />,
      content: <div>Pokédex Content</div>,
    },
    {
      title: "Trainer Card",
      value: "trainer",
      icon: <IconIdBadge2 size={16} />,
      content: <div>Trainer Card Content</div>,
    },
    {
      title: "Achievements",
      value: "achievements",
      icon: <IconTrophy size={16} />,
      content: <div>Achievements Content</div>,
    },
    {
      title: "Settings",
      value: "settings",
      icon: <IconSettings size={16} />,
      content: <div>Settings Content</div>,
    },
  ];

  return (
    <div className="grow relative">
      <section>
        <ButtonTabs tabData={tabData} />
      </section>
      <TicketsBadge className="absolute bottom-10 left-0" />
    </div>
  );
}
