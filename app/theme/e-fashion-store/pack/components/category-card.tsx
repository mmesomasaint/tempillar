import Image from "next/image"
import Button from "../elements/button"
import { TextLabel } from "../elements/text"
import { BsStar } from "react-icons/bs"

export default function CategoryCard({src, title, long, tall}: {src: string, title: string, long?: boolean, tall?: boolean}) {
  const width = long ? 'w-1/4' : 'w-3/4'
  const height = tall ? 'h-1/4' : 'h-3/4'

  return ( 
    <div className={`relative flex justify-start items-end p-6 rounded-2xl shadow-sm ${width} ${height}`}>
      <Image fill src={src} alt='category image' />
      <Button>
        <TextLabel>{title}</TextLabel>
        <BsStar className='text-sm' />
      </Button>
    </div>
  )
}