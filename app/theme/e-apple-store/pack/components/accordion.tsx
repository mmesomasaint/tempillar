'use client'

import { useState, ReactNode } from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { TextLabel } from '../elements/text'

export default function Accordion({
  children,
}: {
  children: ReactNode[] | ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='relative w-full flex'>
      <div
        className='flex justify-between items-center gap-8 p-4'
        onClick={() => setOpen((prev) => !prev)}
      >
        <TextLabel>Categories</TextLabel>
        <BiDownArrow className={`${open && 'rotate-180'} text-sm`} />
      </div>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute left-0 top-[100%] flex flex-col gap-3 items-start justify-start px-4`}
      >
        {children}
      </div>
    </div>
  )
}
