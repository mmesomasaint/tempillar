'use client'

import { useState } from 'react'
import ProductCard, { ProductCardProps } from './card/product'
import { BsStar } from 'react-icons/bs'

export default function Slider({ products }: { products: ProductCardProps[] }) {
  const [active, setActive] = useState<number>(0)

  const getNextActive = () => {
    if (active < products.length - 1) setActive(active+1)
  }

  const getPrevActive = () => {
    if (active > 0) setActive(active - 1)
  }

  return (
    <div className='relative h-[27rem] w-[36%] -right-[25%] p-1'>
      {products.map((product, idx) => {
        const isActive = idx <= active
        const activeStyle = `z-${idx}0 left-0 w-[52%]`
        const normStyle = `z-${
          products.length - idx
        }0 left-[100%] -translate-x-full w-[44%]`

        return (
          <ProductCard
            key={product.title}
            className={`absolute top-0 duration-700 ${
              isActive ? activeStyle : normStyle
            }`}
            src={product.src}
            title={product.title}
            price={product.price}
            full={isActive}
            bigger={isActive}
          />
        )
      })}
      <div className='absolute z-50 bottom-3 left-[100%] -translate-x-full w-[44%]  flex justify-start items-center gap-6'>
        <button
          className='w-10 h-10 rounded-full shadow-sm bg-black border border-black disabled:bg-white text-white disabled:text-black flex justify-center items-center'
          onClick={() => getPrevActive()}
          disabled={active <= 0}
        >
          <BsStar className='text-base' />
        </button>
        <button
          className='w-10 h-10 rounded-full shadow-sm bg-black border border-black disabled:bg-white text-white disabled:text-black flex justify-center items-center'
          onClick={() => getNextActive()}
          disabled={active >= products.length - 1}
        >
          <BsStar className='text-base' />
        </button>
      </div>
    </div>
  )
}
