// app/api/products/route.js
import data from "@/data/products.json";

export async function GET() {
  try {
    // Parse the JSON data
    const products = JSON.parse(data);

    // Return the products as a JSON response
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error reading products file:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching products" }),
      { status: 500 }
    );
  }
}
