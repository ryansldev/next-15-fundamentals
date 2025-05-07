"use client"

import { ProductCard } from "@/components/product-card";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      fetch("/api/products")
        .then((response) => response.json())
        .then((json) => {
          setProducts(json.products)
        })
    }

    getProducts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold">Produtos</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-center py-5">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
