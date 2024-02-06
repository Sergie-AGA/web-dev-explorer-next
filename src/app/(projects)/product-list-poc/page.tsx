import ProductCard from "@/features/product-list/components/ProductCard";
import { useProducts } from "@/features/product-list/hooks/useProducts";
import '@/features/product-list/styles/product-list.css'

export const revalidate = 60 * 30 // 30 min

export default async function ProductListPoc() {
    const products = await useProducts()
    
  return (
    <main className="max-width-container py-4">
        
        <section>
        <ul className="custom-grid lg:grid">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </ul>

        </section>

    </main>
  );
}
