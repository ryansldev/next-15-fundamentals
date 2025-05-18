import { Pagination } from "@/components/pagination";
import { ProductCard } from "@/components/product-card";
import type { Paginated } from "@/types/paginated";
import { Product } from "@/types/product";

interface IPagination {
  page?: number;
  size?: number;
}

export const revalidate = 60;

async function getProducts(pagination?: IPagination): Promise<Paginated<Product[]> | null> {
  const res = await fetch(`http://localhost:3000/products?_page=${pagination?.page ?? 1}&_per_page=${pagination?.size ?? 9}`)
  if(!res.ok) return null
  return res.json()
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3000/products?_page=1&_per_page=9");
  const products: Paginated<Product[]> = await res.json();

  return products.data.map(product => ({
    id: product.id.toString(),
  }));
}

interface HomeProps {
  searchParams?: IPagination;
}

export default async function Home({ searchParams }: HomeProps) {
  const pagination = {
    page: Number(searchParams?.page) ?? 1,
    size: Number(searchParams?.size) ?? 9,
  }
  const products = await getProducts(pagination)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold">Produtos</h1>
      <div className="flex flex-wrap gap-x-3 gap-y-6 items-center justify-center py-5">
        {products?.data && products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        pagination={{
          ...pagination,
          first: products?.first,
          last: products?.last,
          next: products?.next,
          items: products?.items,
          pages: products?.pages,
          prev: products?.prev,
        }}
      />
    </div>
  );
}
