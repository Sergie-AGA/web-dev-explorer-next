export const metadata = {
  title: {
    template: "%s | Web Dev Explorer",
    default: "Form Examples",
  },
  description: "Exploring examples of custom forms with Survey JS",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-cyan-950 site-wrap p-0">{children}</div>;
}
