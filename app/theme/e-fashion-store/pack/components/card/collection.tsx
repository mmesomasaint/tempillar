import Image from 'next/image'
import { TextMid, TextXSmall } from '../../elements/text'

export default function CollectionCard({
  bgSrc,
  title,
  subTitle,
}: {
  bgSrc: string
  title: string
  subTitle: string
}) {
  return (
    <div className='flex justify-between items-stretch w-1/2 h-fit rounded-2xl shadow-sm'>
      <div className='flex flex-col justify-center gap-6 pl-3'>
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
        className='rounded-r-2xl'
      />
    </div>
  )
}
