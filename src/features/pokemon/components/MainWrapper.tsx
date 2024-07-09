import MainHub from "@/features/pokemon/components/MainHub/MainHub";
import SimpleTabs from "@/components/Tabs/SimpleTabs";

export default function MainWrapper() {
  const tabData = [
    {
      title: "Adventure",
      value: "adventure",
    },
    {
      title: "Manage Pokémon",
      value: "manage",
    },
    {
      title: "Trainer Card",
      value: "trainer",
    },
    {
      title: "Achievements",
      value: "achievements",
    },
  ];
  return (
    <div>
      <section>
        <SimpleTabs tabData={tabData}>
          <MainHub />
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </SimpleTabs>
      </section>
    </div>
  );
}
