"use client";

import { useEffect, useState } from "react";

export default function Home() {
  // State to store fetched data and loading/error states
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component is mounted
  async function fetchData() {
    try {
      // Start by setting loading to true
      setLoading(true);
      // Fetch the data from the API
      const response = await fetch(
        "https://course-api.com/react-store-products"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setAllProducts(data); // Set the fetched data to state
    } catch (err) {
      setError(err.message); // Set the error state if an error occurs
    } finally {
      setLoading(false); // Set loading to false after the data is fetched
    }
  }

  // Use useEffect to call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Handling loading and error states
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // Render the data if available
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {allProducts?.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
