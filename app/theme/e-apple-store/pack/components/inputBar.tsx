'use client'

import { BsStar } from 'react-icons/bs'
import { TextLabel } from '../elements/text'

export function InputBarIcon({
  large,
  searchText,
  setSearchText,
}: {
  large?: boolean
  searchText?: string
  setSearchText?: (value: string) => void
}) {
  return (
    <div className='relative h-fit w-full'>
      <BsStar className='text-sm z-10 absolute top-[50%] -translate-y-[50%] left-5 pointer-events-none text-apple-store-faded' />
      <input
        name='searchText'
        value={searchText}
        className='w-full rounded-full p-3 pl-10 pr-2 placeholder:text-apple-store-faded placeholder:text-base placeholder:font-semibold text-apple-store-faded font-semibold text-base border border-apple-store-faded-max focus:outline-apple-store-pri'
        placeholder='Search Store'
        onChange={(e) => setSearchText && setSearchText(e.target.value)}
      />
    </div>
  )
}

export function InputBarButton({
  cta,
  large,
  searchText,
  setSearchText,
}: {
  cta: string
  large?: boolean
  searchText?: string
  setSearchText?: (value: string) => void
}) {
  return (
    <div className='flex justify-start items-center'>
      <input
        name='searchText'
        value={searchText}
        className='grow rounded-l-2xl p-2 placeholder:text-apple-store-faded placeholder:text-sm placeholder:font-semibold text-apple-store-faded font-semibold text-sm border border-apple-store-faded focus:outline-apple-store-pri'
        onChange={(e) => setSearchText && setSearchText(e.target.value)}
      />
      <button className='self-stretch px-4 bg-apple-store-pri/60 text-white rounded-r-2xl hover:bg-apple-store-pri'>
        <TextLabel>{cta}</TextLabel>
      </button>
    </div>
  )
}
