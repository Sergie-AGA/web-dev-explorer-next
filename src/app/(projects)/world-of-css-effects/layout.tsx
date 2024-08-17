import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";

export const metadata = {
  title: {
    template: "%s | Web Dev Explorer",
    default: "World of CSS Effects",
  },
  description:
    "A place where diverse CSS tricks and techniques are used to achieve unique visual effects",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-cyan-950 site-wrap">
      <GlobalHeader title="World of CSS Effects"></GlobalHeader>
      {children}
    </div>
  );
}
