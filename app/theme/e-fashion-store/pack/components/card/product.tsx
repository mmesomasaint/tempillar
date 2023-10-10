import Image from 'next/image'
import { TextXSmall } from '../../elements/text'
import { BsStar } from 'react-icons/bs'

export type ProductCardProps = {
  src: string
  title: string
  price: number
  className?: string
}

export default function ProductCard({
  src,
  title,
  price,
  className,
}: ProductCardProps) {
  return (
    <div className={`flex flex-col gap-3 w-1/6 h-[23rem] ${className}`}>
      <div className='relative grow w-full'>
        <Image src={src} fill alt='product image' className='rounded-2xl' />
        <BsStar className='absolute right-3 top-3 z-20 text-base text-fashion-store-sec' />
      </div>
      <div className='flex justify-between items-center gap-10'>
        <TextXSmall copy>{title}</TextXSmall>
        <TextXSmall>{`$${price.toString()}`}</TextXSmall>
      </div>
    </div>
  )
}
