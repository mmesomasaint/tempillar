import Image from 'next/image'
import { TextMid, TextSmall } from '../../elements/text'

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
    <div className='shadow-sm w-fit'>
      <Image
        src={src}
        width={200}
        height={200}
        alt={`Image for product: ${title}`}
        className='border w-full'
      />
      <div className='p-10 flex flex-col gap-5 items-start justify-start'>
        <div className='flex justify-start items-center gap-5'>
          <TextMid>${price}</TextMid>
          <span className='line-through'>
            <TextSmall faded>${discount}</TextSmall>
          </span>
        </div>
        <div className='flex flex-col gap-0'>
          <TextSmall faded>{title}</TextSmall>
          <TextSmall faded>{variants.join(' | ')}</TextSmall>
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
        <div className='flex justify-start items-center gap-6'>
          <div className='flex justify-start gap-3'>{rating}</div>
          <div className='flex justify-start gap-3'>
            <span>{amountSold}</span>
            <span>sold</span>
          </div>
        </div>
      </div>
    </div>
  )
}
