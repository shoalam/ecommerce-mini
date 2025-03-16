import Layout from "@/components/layout";
import PageBanner from "@/components/PageBanner";

export default async function ProductDetails({ params }) {
  const { slug } = await params;
  return (
    <Layout>
      <PageBanner />
      <section className="product-details">
        <div className="container">
          <h1>Product - {slug}</h1>
        </div>
      </section>
    </Layout>
  );
}
