import CartContent from "@/features/product-list/components/CartContent";
import ProductCard from "@/features/product-list/components/ProductCard";
import { useProducts } from "@/features/product-list/hooks/useProducts";
import "@/features/product-list/styles/product-list.css";

export const revalidate = 20; // 30 min
// export const revalidate = 60 * 30 // 30 min

export default async function ProductListPoc() {
  const products = await useProducts();

  return (
    <main className="max-width-container py-4">
      <section className="flex gap-4 items-start relative">
        <div className="max-h-[calc(100vh-32px)] overflow-auto hidden lg:block rounded-xl bg-neutral-950 flex-[1_1_30%] sticky top-4">
          <CartContent />
        </div>
        <ul className="flex-[1_1_70%] custom-grid lg:grid">
          {products.map((product) => (
            <ProductCard id={product.id} product={product} key={product.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}
