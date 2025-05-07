import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button">

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button className={twMerge("px-6 bg-neutral-800 py-3 rounded-xl hover:bg-neutral-700 transition-colors cursor-pointer font-semibold", className)} {...props} />
  )
}