import ProductDetail from "@/features/product-list/components/ProductDetail";
import "@/features/product-list/styles/product-list.css";
import { calculatePrice } from "@/features/product-list/utils/calculatePrice";
import { getProducts } from "@/features/product-list/services/getProducts";

export const revalidate = 30 * 60; // 30 min

interface IProductProps {
  params: {
    product: string;
  };
}

export async function generateMetadata(slug: IProductProps) {
  const products = await getProducts();

  const product = products.find(
    (product) => product.slug === slug.params.product
  );

  return {
    title: product.title,
  };
}

// export async function generateStaticParams() {
//     const products = await useProducts()
//     return products.map((product) => {
//         return {slug: product.slug}
//     })
// }

export default async function ProductListPoc(slug: IProductProps) {
  const products = await getProducts();

  const product = products.find(
    (product) => product.slug === slug.params.product
  );
  let pickUpPrice;
  let discountedPrice;
  if (product) {
    const prices = calculatePrice(product);
    pickUpPrice = prices.pickUpPrice;
    discountedPrice = prices.discountedPrice;
  }

  return (
    <main className="max-width-container py-4">
      <section>
        {product ? (
          <ProductDetail
            product={product}
            discountedPrice={discountedPrice || 0}
            pickUpPrice={pickUpPrice || 0}
          />
        ) : (
          <p>No product found</p>
        )}
      </section>
      <style></style>
    </main>
  );
}
