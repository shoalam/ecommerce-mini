import Image from "next/image";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-item">
      <div className="product-img">
        <Image
          src={product.image}
          width={300}
          height={175}
          alt={product.name}
          className="w-full aspect-1 object-cover rounded-lg h-[175px]"
        />
      </div>
      <div className="flex flex-wrap justify-between items-center gap-5 mt-12 product-info">
        <h5>{product.name}</h5>
        <span>${product.price}</span>
      </div>
    </div>
  );
}
