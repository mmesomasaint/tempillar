import Image from 'next/image'
import {BsStarFill} from 'react-icons/bs'
import { TextLabel, TextMid,  TextTiny } from '../../elements/text'

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
    <div className='w-[17%] border border-apple-store-faded-max rounded-xl shadow-sm'>
      <Image
        src={src}
        width={100}
        height={100}
        alt={`Image for product: ${title}`}
        className='w-full rounded-t-xl'
      />
      <div className='p-3 flex flex-col gap-2 items-start justify-start'>
        <div className='flex justify-start items-center gap-2'>
          <TextMid>${price}</TextMid>
          <span className='line-through text-red-400'>
            <TextTiny faded>${discount}</TextTiny>
          </span>
        </div>
        <div className='flex flex-col gap-5 my-3'>
          <TextLabel faded>{title}</TextLabel>
          <TextLabel faded>{variants.join(' | ')}</TextLabel>
        </div>
        <div className='flex justify-start items-center gap-2'>
          {colors.map((color) => (
            <div
              key={color}
              className='w-4 h-4 rounded-full border border-apple-store-faded-max'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className='flex justify-start items-center gap-10'>
          <div className='flex justify-start items-center gap-2'>
            <BsStarFill className='text-xs text-yellow-500' />
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
