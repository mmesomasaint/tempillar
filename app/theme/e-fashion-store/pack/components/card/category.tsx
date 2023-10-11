import Image from 'next/image'
import Button from '../../elements/button'
import { TextLabel } from '../../elements/text'
import { BsArrowRight } from 'react-icons/bs'

export default function CategoryCard({
  src,
  title,
}: {
  src: string
  title: string
}) {
  return (
    <div className={`relative rounded-2xl shadow-sm text-white w-full h-full`}>
      <Image fill src={src} alt='category image' className='rounded-2xl' />
      <div className='w-full bg-transparent z-20 absolute h-full flex justify-start items-end p-3'>
        <Button>
          <TextLabel>{title}</TextLabel>
          <BsArrowRight className='text-base' />
        </Button>
      </div>
    </div>
  )
}
