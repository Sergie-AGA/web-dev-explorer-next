import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";

export const metadata = {
  title: {
    template: "%s | Web Dev Explorer",
    default: "Reusable Backend",
  },
  description:
    "A place that aggregates links to projects containing reusable backend modules for projects",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cyan-950 min-height-screen site-wrap">
      <GlobalHeader title="Reusable Backend"></GlobalHeader>
      {children}
    </div>
  );
}
