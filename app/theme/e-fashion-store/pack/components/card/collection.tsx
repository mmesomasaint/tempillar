import Image from 'next/image'
import { TextMid, TextXSmall } from '../../elements/text'

export default function CollectionCard({
  bgSrc,
  title,
  subTitle,
  picLeft,
}: {
  bgSrc: string
  title: string
  subTitle: string
  picLeft?: boolean
}) {
  return (
    <div className='bg-white flex justify-between items-stretch w-1/2 h-fit rounded-2xl shadow-sm'>
      <div
        className={`bg-white flex flex-col justify-center gap-6 ${
          picLeft ? 'pr-3' : 'pl-3'
        }`}
      >
        <TextMid>{title}</TextMid>
        <TextXSmall copy faded>
          {subTitle}
        </TextXSmall>
      </div>
      <Image
        src={bgSrc}
        width={300}
        height={300}
        alt='collection image'
        className={`${picLeft ? 'rounded-l-2xl order-first' : 'rounded-r-2xl'}`}
      />
    </div>
  )
}
