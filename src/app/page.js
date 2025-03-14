"use client";

import { useEffect, useState } from "react";
import data from "@/data/products.json";
import Layout from "@/components/layout";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);

      setAllProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Layout>
      <h1>Product List</h1>
      <ul>
        {allProducts?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </Layout>
  );
}
