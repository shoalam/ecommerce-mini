"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeroHome from "@/components/HeroHome";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <Layout>
      <HeroHome />
      <FeaturedProducts />
    </Layout>
  );
}
