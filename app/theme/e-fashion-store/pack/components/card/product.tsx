import Image from 'next/image'
import { MdOutlineFavoriteBorder, MdFavorite } from 'react-icons/md'

export type ProductCardProps = {
  src: string
  title: string
  price: number
  isFave?: boolean
  className?: string
  bigger?: boolean
}

export default function ProductCard({
  src,
  title,
  price,
  isFave,
  className,
  bigger,
}: ProductCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        bigger ? 'h-[26rem]' : 'h-[22rem]'
      } bg-white rounded-2xl ${className}`}
    >
      <div className='relative grow w-full'>
        <Image src={src} fill alt='product image' className='rounded-2xl' />
        <div className='absolute z-10 right-3 top-3 w-6 h-6 flex justify-center items-center bg-white rounded-full'>
          {isFave ? <MdFavorite className='text-base text-red-500' /> : <MdOutlineFavoriteBorder className='text-base text-fashion-store-sec' />}
        </div>
      </div>
      <div className='flex justify-between items-center gap-10 bg-white'>
        <p className={`${bigger ? 'text-xl' : 'text-base'} font-medium`}>
          {title}
        </p>
        <p className={`${bigger ? 'text-xl' : 'text-base'} font-medium`}>
          ${price}
        </p>
      </div>
    </div>
  )
}
