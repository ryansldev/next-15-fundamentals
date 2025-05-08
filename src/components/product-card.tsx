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
    <div className={twMerge("flex flex-col border border-neutral-800 rounded-xl", className)} {...props}>
      <div className="h-[350px] w-[512px] bg-neutral-900 p-4">
        <Image className="w-full h-full object-contain" src={product.imageUrl} alt={product.title} width={512} height={512} />
      </div>

      <div className="flex flex-col p-10">
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