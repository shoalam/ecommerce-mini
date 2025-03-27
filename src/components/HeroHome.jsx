import Link from "next/link";
import React from "react";

export default function HeroHome() {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
          <div className="hero-content">
            <h2>
              Design Your <br />
              Comfort Zone
            </h2>
            <div className="text-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </div>
            <Link href="/products" className="btn hero-btn">
              Shop Now
            </Link>
          </div>
          <div className="hero-images">
            <img
              src="/assets/img/hero-bcg.jpeg"
              alt="nice table"
              className="main-img"
            />
            <img
              src="/assets/img/hero-bcg-2.jpeg"
              alt="person working"
              className="accent-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
