import { Button } from "@/components/button";
import type { Product } from "@/types/product";
import Image from "next/image";

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  return await res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) return "Produto não encontrado";

  return (
    <div className="min-h-screen flex justify-between gap-6">
      <div className="flex-1 flex items-center justify-center">
        <Image className="object-contain" src={product.imageUrl} alt={product.title} height={800} width={800} quality={100} />
      </div>
      <div className="flex flex-col justify-center gap-3 p-10 flex-1">
        <h1 className="text-6xl font-semibold">{product.title}</h1>
        <h3 className="text-5xl">
          {(product.value/100).toLocaleString("pt-br", { style: "currency", currency: product.currency })}
        </h3>

        <p className="text-neutral-400 mt-4">{product?.description}</p>

        <Button className="mt-1" disabled>Comprar</Button>
      </div>
    </div>
  )
}