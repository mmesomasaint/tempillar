import Image from 'next/image'
import { TextMid, TextXSmall } from '../../elements/text'

export default function CollectionCard({
  bgSrc,
  title,
  subTitle,
  picLeft,
  full
}: {
  bgSrc: string
  title: string
  subTitle: string
  picLeft?: boolean
  full?: boolean
}) {
  return (
    <div className={`bg-white flex justify-between items-stretch h-fit rounded-2xl shadow-sm ${full ? 'w-full' : 'w-1/2'}`}>
      <div
        className={`bg-white flex flex-col justify-center rounded-2xl gap-6 ${
          picLeft ? 'pr-6' : 'pl-6'
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
