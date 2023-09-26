'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Slider({ srcList }: { srcList: string[] }) {
  const [activeSrc, setActiveSrc] = useState<string>(srcList[0])

  return (
    <div className='flex md:flex-col justify-center items-center gap-10'>
      <div className='md:order-0'>
        <Image src={activeSrc} width={400} height={400} alt='main-image' />
      </div>
      <div className='flex flex-col md:flex-row justify-evenly items-center gap-6'>
        {srcList.map((src, id) => (
          <Image
            onClick={() => setActiveSrc(src)}
            key={src}
            src={src}
            width={50}
            height={50}
            alt={`thumbnail-${id + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
