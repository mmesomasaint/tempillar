'use client'

import { BsStarFill } from 'react-icons/bs'
import { TextLabel } from '../elements/text'

export function SearchBarMain({
  searchText,
  setSearchText,
}: {
  searchText?: string
  setSearchText?: (value: string) => void
}) {
  return (
    <div className='relative h-fit'>
      <BsStarFill className='text-sm z-10 absolute top-[50%] -translate-y-[50%] left-5 pointer-events-none text-apple-store-faded' />
      <input
        name='searchText'
        value={searchText}
        className='w-full rounded-full p-3 pl-10 pr-2 placeholder:text-apple-store-faded placeholder:text-base placeholder:font-semibold text-apple-store-faded font-semibold text-base border border-apple-store-faded focus:outline-apple-store-pri'
        placeholder='Search Store'
        onChange={(e) => setSearchText && setSearchText(e.target.value)}
      />
    </div>
  )
}


export function SearchBarMini({
  cta,
  searchText,
  setSearchText,
}: {
  cta: string
  searchText?: string
  setSearchText?: (value: string) => void
}) {
  return (
    <div className='flex justify-start items-center h-fit'>
    <input
      name='searchText'
      value={searchText}
      className='w-full rounded-l-2xl p-2 placeholder:text-apple-store-faded placeholder:text-sm placeholder:font-semibold text-apple-store-faded font-semibold text-sm border border-apple-store-faded focus:outline-apple-store-pri'
      placeholder={`${cta}`}
      onChange={(e) => setSearchText && setSearchText(e.target.value)}
    />
    <button className='bg-apple-store-pri/60 text-white rounded-r-2xl h-full'>
      <TextLabel>{cta}</TextLabel>
    </button>
    </div>
  )
}