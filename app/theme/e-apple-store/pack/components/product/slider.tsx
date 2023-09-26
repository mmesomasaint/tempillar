'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Slider({ srcList }: { srcList: string[] }) {
  const [activeSrc, setActiveSrc] = useState<string>(srcList[0])

  return (
    <div className='flex md:flex-col justify-center items-center gap-10 p-10 border-2 border-apple-store-faded-max w-fit mx-auto rounded-3xl'>
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
            className={`transform duration-700 rounded-2xl w-fit p-5 border-2 ${src === activeSrc ? 'border-apple-store-pri' : 'border-apple-store-faded-max'}`}
          />
        ))}
      </div>
    </div>
  )
}
