import SimpleTabs from "@/components/Tabs/SimpleTabs";
import DisplayListing from "./DisplayListing";
import GlitchTextContainer from "./GlitchText/GlitchTextContainer";

export default function ProjectWrapper() {
  const tabData = [
    {
      title: "SFX",
      value: "sfx",
    },
    {
      title: "CSS Art",
      value: "art",
    },
  ];

  const sfxMap = [
    {
      title: "Glitch Effect",
      value: "glitch",
      component: GlitchTextContainer,
    },
    {
      title: "Neon Effect",
      value: "neon",
      component: "",
    },
    {
      title: "Fade Effect",
      value: "fade",
      component: "",
    },
  ];

  const artMap = [
    {
      title: "CSS Phone",
      value: "phone",
      component: "",
    },
  ];

  return (
    <>
      <SimpleTabs tabData={tabData} initialTab={"sfx"} className="m-auto">
        <DisplayListing data={sfxMap} />
        <DisplayListing data={artMap} />
      </SimpleTabs>
    </>
  );
}
