import Image from 'next/image'
import Button from '../elements/button'
import { TextLabel } from '../elements/text'
import { BsStar } from 'react-icons/bs'

export default function CategoryCard({
  src,
  title,
  long,
  tall,
}: {
  src: string
  title: string
  long?: boolean
  tall?: boolean
}) {
  const width = long ? 'w-3/4' : 'w-1/4'
  const height = tall ? 'h-full' : 'h-64'

  return (
    <div
      className={`relative rounded-2xl shadow-sm text-white ${width} ${height}`}
    >
      <Image fill src={src} alt='category image' />
      <div className='w-full bg-transparent z-20 absolute h-full flex justify-start items-end p-3'>
        
      <Button>
        <TextLabel>{title}</TextLabel>
        <BsStar className='text-sm' />
      </Button>
      </div>
    </div>
  )
}
