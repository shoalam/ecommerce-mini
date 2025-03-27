import { useGetAllProductsQuery } from "@/services/ProductServices";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const { data: products } = useGetAllProductsQuery();
  return (
    <section className="featured-products section">
      <div className="container">
        <div className="section-heading">
          <h2>Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 featured-product-grid">
          {products?.length > 0 &&
            products
              ?.slice(0, 3)
              .map((product, i) => <ProductCard product={product} key={i} />)}
        </div>
        <div className="flex justify-center mt-20">
          <Link href="/products" className="btn hero-btn">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
