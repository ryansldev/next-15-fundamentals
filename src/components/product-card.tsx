import type { Product } from "@/types/product";
import Image from "next/image";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";
import Link from "next/link";

interface ProductCardProps extends ComponentProps<"div"> {
  product: Product;
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
  return (
    <div className={twMerge("flex flex-col gap-8 border border-neutral-800 p-10 rounded-xl", className)} {...props}>
      <Image src={product.imageUrl} alt={product.title} width={512} height={512} />

      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <h2 className="text-2xl font-medium">{(product.value/100).toLocaleString("pt-br", { style: "currency", currency: product.currency })}</h2>

        <Link href={`/products/${product.id}`}>
          <Button type="button" className="w-full mt-4">
            Visualizar
          </Button>
        </Link>
      </div>
    </div>
  )
}