"use client";
import Layout from "@/components/layout";
import PageBanner from "@/components/PageBanner";
import React from "react";

export default function AboutPage() {
  return (
    <Layout>
      <PageBanner />
      <section className="about-section">
        <div className="container">
          <h1>About Page</h1>
        </div>
      </section>
    </Layout>
  );
}
