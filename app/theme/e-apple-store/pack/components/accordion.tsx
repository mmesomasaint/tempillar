'use client'

import {useState, ReactNode} from 'react'
import { BiDownArrow } from 'react-icons/bi'
import { TextLabel } from '../elements/text'

export default function Accordion({children}: {children: ReactNode[] | ReactNode}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full flex'>
      <div className='flex justify-between items-center gap-5' onClick={() => setOpen(prev => !prev)}>
        <TextLabel>Categories</TextLabel>
        <BiDownArrow className={`${open && 'rotate-180'} text-lg`} />
      </div>
      <div className='flex flex-col gap-3 items-start justify-start'>
        {children}
      </div>
    </div>
  )
}