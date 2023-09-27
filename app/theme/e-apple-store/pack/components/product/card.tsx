import Image from 'next/image'
import { TextMid,  TextTiny } from '../../elements/text'

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
    <div className='w-[17%] border border-apple-store-faded-max rounded-md shadow-sm'>
      <Image
        src={src}
        width={100}
        height={100}
        alt={`Image for product: ${title}`}
        className='w-full'
      />
      <div className='px-5 pb-5 flex flex-col gap-3 items-start justify-start'>
        <div className='flex justify-start items-center gap-2'>
          <TextMid>${price}</TextMid>
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
            <TextTiny faded>{rating}</TextTiny>
          </div>
          <div className='flex justify-start gap-1'>
            <TextTiny faded>{amountSold}</TextTiny>
            <TextTiny faded>sold</TextTiny>
          </div>
        </div>
      </div>
    </div>
  )
}
