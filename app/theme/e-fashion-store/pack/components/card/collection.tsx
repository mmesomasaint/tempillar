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
    <div
      className={` bg-no-repeat bg-contain bg-right bg-white rounded-2xl shadow-sm w-1/2`}
    >
      <div className='flex flex-col gap-4'>
        <TextMid faded>{title}</TextMid>
        <TextXSmall>{subTitle}</TextXSmall>
      </div>
    </div>
  )
}
