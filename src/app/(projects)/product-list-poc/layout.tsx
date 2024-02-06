import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import ProductCart from "@/features/product-list/components/ProductCart";

export const metadata = {
    title: {
        template: "%s | Web Dev Explorer",
        default: 'Product List POC'
    },
    description: "Proof of concept of a store using Zustand for managing global state and Supabase for the API",
  };

export default async function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="site-wrap bg-cyan-950">
      <GlobalHeader title="Product List POC">
        <ProductCart />
      </GlobalHeader>
      {children}
      {/* <StackingToastContainer /> */}
    </div>
  );
}
