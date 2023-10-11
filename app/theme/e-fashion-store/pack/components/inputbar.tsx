'use client'

import { BsStar } from 'react-icons/bs'

export default function InputBar({
  text,
  setText,
  placeholder,
  full,
}: {
  text?: string
  setText?: (text: string) => void
  placeholder?: string
  full?: boolean
}) {
  return (
    <div className={`relative h-fit ${full ? 'w-full' : 'w-fit'}`}>
      <BsStar className='absolute text-fashion-store-outline top-[50%] -translate-y-[50%] left-6 text-base' />
      <input
        placeholder={placeholder ?? 'Search'}
        value={text}
        onChange={(e) => setText?.(e.target.value)}
        className={`border border-fashion-store-outline pl-12 pr-4 py-3 rounded-full bg-white text-base font-medium placeholder:text-fashion-store-sec-faded ${
          full && 'w-full grow'
        }`}
      />
    </div>
  )
}
