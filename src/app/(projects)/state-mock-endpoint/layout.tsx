import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";

export const metadata = {
  title: "State Mock Endpoint",
  description: "A proof of concept of a product listing",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen site-wrap">
        <GlobalHeader title="State Mock Endpoint" />
        <main className="max-width-container">{children}</main>
      </body>
    </html>
  );
}
