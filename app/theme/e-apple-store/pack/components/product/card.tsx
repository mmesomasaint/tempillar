import Image from 'next/image'
import { TextSmall, TextTiny } from '../../elements/text'

export default function Card({
  title,
  variants,
  src,
  price,
  discount,
  colors,
  rating,
  amountSold,
}: {
  title: string
  variants: string[]
  src: string
  price: number
  discount: number
  colors: string[]
  rating: number
  amountSold: number
}) {
  return (
    <div className='border border-apple-store-faded-max rounded-md shadow-sm w-fit'>
      <Image
        src={src}
        width={100}
        height={100}
        alt={`Image for product: ${title}`}
        className='w-full'
      />
      <div className='px-5 pb-5 flex flex-col gap-2 items-start justify-start'>
        <div className='flex justify-start items-center gap-5'>
          <TextSmall>${price}</TextSmall>
          <span className='line-through'>
            <TextTiny faded>${discount}</TextTiny>
          </span>
        </div>
        <div className='flex flex-col gap-0'>
          <TextTiny faded>{title}</TextTiny>
          <TextTiny faded>{variants.join(' | ')}</TextTiny>
        </div>
        <div className='flex justify-start items-center gap-4'>
          {colors.map((color) => (
            <div
              key={color}
              className='w-6 h-6 rounded-full'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className='flex justify-start items-center gap-3'>
          <div className='flex justify-start gap-1'>
            <TextTiny>{rating}</TextTiny>
          </div>
          <div className='flex justify-start gap-1'>
            <TextTiny>{amountSold}</TextTiny>
            <TextTiny>sold</TextTiny>
          </div>
        </div>
      </div>
    </div>
  )
}
