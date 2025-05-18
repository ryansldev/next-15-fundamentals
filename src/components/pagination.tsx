"use client"

import { Button } from "./button";
import { Paginated } from "../types/paginated"
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface IPagination extends Partial<Omit<Paginated<void>, "data">> {
  page: number;
  size: number;
}

interface PaginationProps {
  pagination: IPagination;
}

export function Pagination({
  pagination
}: PaginationProps) {
  console.log(pagination.page)
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: pagination.pages ?? 0 }, (_, i) => (
        <Link key={i} href={`${window.location.pathname}?page=${i+1}&size=${pagination.size ?? 9}`}>
          <Button key={i} className={twMerge("w-8 h-8 rounded-full flex items-center justify-center", pagination.page === i+1 ? "bg-neutral-700 hover:bg-neutral-600" : "")}>
            {i+1}
          </Button>
        </Link>
      ))}
    </div>
  )
}