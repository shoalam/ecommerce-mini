"use client";
import Layout from "@/components/layout";
import PageBanner from "@/components/PageBanner";
import { useGetAllProductsQuery } from "@/services/ProductServices";
import React from "react";

export default function ProductsPage() {
  const { data: products } = useGetAllProductsQuery();
  // console.log(products);
  return (
    <Layout>
      <PageBanner />
      <section className="products">
        <div className="container">
          <h1>Products Page</h1>
        </div>
      </section>
    </Layout>
  );
}
