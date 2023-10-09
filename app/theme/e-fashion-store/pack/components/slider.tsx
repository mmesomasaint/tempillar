'use client'

import { useState, useMemo, ReactNode } from 'react'
import ProductCard, { ProductCardProps } from './card/product'
import { BsStar } from 'react-icons/bs'

export default function Slider({ products }: { products: ProductCardProps[] }) {
  const [active, setActive] = useState<string>(products[0].title)
  const activeId = useMemo<number>(() => {
    return products.findIndex((product) => product.title === active)
  }, [active])

  const getNextActive = (value: string) => {
    if (activeId !== -1 && activeId < products.length - 1)
      products[activeId + 1].title
    throw new Error('TransitionError: active title not found.')
  }

  const getPrevActive = (value: string) => {
    if (activeId !== -1 && activeId > 1) products[activeId - 1].title
    throw new Error('TransitionError: active title not found.')
  }

  return (
    <div className='relative w-1/2 -right-[25%] p-1'>
      {products.map((product) => {
        const isActive = active === product.title
        const activeStyle = 'scale-125'
        const normStyle = 'scale-100'

        return (
          <ProductCard
            className={`absolute top-0 duration-700 ${
              isActive ? activeStyle : normStyle
            }`}
            src={product.src}
            title={product.title}
            price={product.price}
          />
        )
      })}
      <div className='absolute bottom-0 left-[50%] -translate-x-[50%] flex justify-center items-center gap-10'>
        <button
          className='w-16 h-16 rounded-full shadow-sm bg-black flex justify-center items-center'
          onClick={() => setActive((prev) => getNextActive(prev))}
          disabled={activeId === 1}
        >
          <BsStar className='text-base text-white' />
        </button>
        <button
          className='w-16 h-16 rounded-full shadow-sm bg-black flex justify-center items-center'
          onClick={() => setActive((prev) => getPrevActive(prev))}
          disabled={activeId === products.length - 1}
        >
          <BsStar className='text-base text-white' />
        </button>
      </div>
    </div>
  )
}
