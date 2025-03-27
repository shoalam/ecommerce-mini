"use client";
import Layout from "@/components/layout";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/services/ProductServices";
import React from "react";

export default function ProductsPage() {
  const { data: products } = useGetAllProductsQuery();

  return (
    <Layout>
      <PageBanner />
      <section className="products section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 product-grid">
            {products?.length > 0 &&
              products?.map((product, i) => (
                <ProductCard product={product} key={i} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
