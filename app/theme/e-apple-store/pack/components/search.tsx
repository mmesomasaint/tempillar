'use client'

import { BsStarFill } from 'react-icons/bs'

export function SearchMain({searchText, setSearchText}: {searchText?: string, setSearchText?: (value: string) => void}) {
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
