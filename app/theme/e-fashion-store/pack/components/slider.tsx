'use client'

import { useState, ReactNode } from "react";
import ProductCard, { ProductCardProps } from "./card/product";

export default function Slider({products}: {products: ProductCardProps[]}) {
  const [active, setActive] = useState<string>(products[0].title)

  return (
    <div className="relative w-1/2 -right-[25%] p-1">
      {products.map(product => {
        const isActive = active === product.title
        const activeStyle = 'scale-125'
        const normStyle = 'scale-100'

        return <ProductCard className={`duration-700 ${isActive ? activeStyle : normStyle}`} src={product.src} title={product.title} price={product.price} />
      })}
    </div>
  )
}