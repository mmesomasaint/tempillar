'use client'

import { useState, useEffect, useMemo } from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import { DropDownMultiple } from '../../pack/components/dropdown'
import { InputBarButton, InputBarIcon } from '../../pack/components/inputBar'
import {
  TextIntro,
  TextLabel,
  TextMid,
  TextTiny,
  TextXSmall,
} from '../../pack/elements/text'
import { HR } from '../../pack/elements/rule'
import { HCard } from '../../pack/components/product/card'
import Image from 'next/image'
import { Filter, DefaultFilter, FilterSection, Category } from '../lib/filter'
import { BsStar } from 'react-icons/bs'
import { OutlineButton } from '../../pack/components/outline-btns'
import Button from '../../pack/elements/button'

export default function Checkout() {
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState<Filter>(DefaultFilter)
  const categories = useMemo<string[]>(
    () => Object.keys(filter.categories),
    [filter]
  )

  // Filter Setters
  const setSectionValue = (
    value: boolean | number,
    section: FilterSection,
    id: string
  ) => {
    setFilter((prev) => ({
      ...prev,
      [section]: { ...prev[section], [id]: value },
    }))
  }

  const setCategory = (value: boolean, category: string) => {
    setSectionValue(value, 'categories', category)
  }

  const resetCategories = () => {
    const categories = Object.keys(filter.categories)
    return categories.forEach((category) => setCategory(false, category))
  }

  return (
    <main className='min-h-screen flex flex-col'>
      <div className='flex border-y border-apple-store-outline-faded-max justify-between items-center gap-40 px-7 py-4'>
        <TextIntro primary>iStore</TextIntro>
        <div className='grow flex justify-center items-center gap-5'>
          <DropDownMultiple
            title={'Categories'}
            selectedItems={[
              ...categories.filter((category) => {
                // Return only categories with `true` value
                return filter.categories[category as Category] === true
              }),
            ]}
            items={categories}
            setSelectedItems={(values: string[]) => {
              // Reset the categories(Set all categories to default value i.e false).
              resetCategories()
              // Set the categories in `values` to true.
              return values.forEach((category) => setCategory(true, category))
            }}
          />
          <InputBarIcon searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div className='flex justify-end items-center gap-3 text-apple-store-outline-faded-max'>
          <TbShoppingBag className='text-apple-store-faded-max text-xl' />
          <IoMdNotificationsOutline className='text-apple-store-faded-max text-xl' />
          <MdOutlineEmail className='text-apple-store-faded-max text-xl' />
          <TextLabel>|</TextLabel>
          <div className='relative w-7 h-7 rounded-full border border-apple-store-outline-faded-max'>
            <Image
              src='/imgs/woman-avatar.jpg'
              fill
              alt='avatar'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
      <div className='border-b flex justify-between items-center gap-10 border-apple-store-outline-faded-max px-7 py-4'>
        <div className='flex justify-start items-center gap-5'>
          <TextTiny fadedMax>Macbook M2 Air</TextTiny>
          <TextTiny fadedMax>Macbook M2 Pro</TextTiny>
          <TextTiny fadedMax>Apple Watch Ultra</TextTiny>
          <TextTiny fadedMax>Airpods Max</TextTiny>
          <TextTiny fadedMax>iPad Pro</TextTiny>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='flex justify-start items-center gap-1'>
            <FiMapPin className='text-sm text-apple-store-faded-max' />
            <TextXSmall fadedMax>Ships to</TextXSmall>
          </span>
          <TextXSmall>Umuajonisi River, Port Harcourt</TextXSmall>
        </div>
      </div>
      <div className='bg-gray-100/70 px-7 py-4 min-h-full grow gap-5 flex flex-col w-full'>
        <div className='flex justify-between items-center gap-10'>
          <span className='flex justify-start items-center gap-10'>
            <TextTiny faded>Home</TextTiny>
            <TextTiny faded>
              <BsStar className='text-base' />
            </TextTiny>
            <TextTiny faded>Checkout</TextTiny>
          </span>
        </div>
        <div className='grow grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-5 place-items-start'>
          <div className='col-span-11 '>
            <TextIntro faded copy>
              Your Items &amp; Shipment
            </TextIntro>
            <div className='h-fit w-full flex flex-col mt-4 gap-6 bg-white rounded-xl border border-apple-store-outline-faded-max p-5'>
              <HR>
                <HCard
                  src='/imgs/macbook-pro-fv-1.webp'
                  title={`Apple Macbook Pro 14'' 2022 | M2 Max Chip`}
                  amount={2}
                  variants={[
                    'Gray',
                    '16GB RAM, 16 Core GPU Apple M2 Pro Chip',
                    '512GB',
                  ]}
                  note='Please send quickly'
                  price={2690.16}
                />
              </HR>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center gap-4'>
                  <TextIntro faded>Delivery Information</TextIntro>
                  <Button outlinePrimary>Edit Address</Button>
                </div>
                <div className='flex justify-start items-center gap-3'>
                  <div className='w-20 h-20 rounded-2xl border border-apple-store-outline-faded-max' />
                  <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                      <TextXSmall>Bayu Onyedike</TextXSmall>
                      <TextTiny fadedMax>0805332803</TextTiny>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <TextTiny fadedMax>
                        No 1709, lockestreet avenue nwanghabu
                      </TextTiny>
                      <TextTiny fadedMax>Port Harcourt</TextTiny>
                    </div>
                  </div>
                </div>
                <div className='flex justify-start items-center gap-4'>
                  <div className='flex items-center gap-2'>
                    <BsStar className='text-base text-apple-store-faded-max' />
                    <TextTiny fadedMax>Estimated Delivery in 3 days</TextTiny>
                  </div>
                  <TextLabel fadedMax>|</TextLabel>
                  <div className='flex items-center gap-2'>
                    <BsStar className='text-base text-apple-store-faded-max' />
                    <TextTiny fadedMax>Free shipping insurance</TextTiny>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 h-fit w-full flex flex-col gap-6 bg-white rounded-xl border border-apple-store-outline-faded-max p-5'>
            <HR>
              <div className='flex flex-col gap-3'>
                <TextXSmall>Get Promo</TextXSmall>
                <InputBarButton>Apply</InputBarButton>
              </div>
            </HR>
            <HR>
              <div className='flex flex-col gap-3'>
                <TextXSmall>Payment Method</TextXSmall>
                <div className='flex flex-wrap gap-1'>
                  <OutlineButton>GPay</OutlineButton>
                  <OutlineButton>GoPay</OutlineButton>
                  <OutlineButton>Visa</OutlineButton>
                </div>
              </div>
            </HR>
            <div className='flex flex-col gap-6'>
              <HR dashed>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center gap-2'>
                    <TextTiny faded>Sum Total</TextTiny>
                    <TextXSmall>$2,690.16</TextXSmall>
                  </div>
                  <div className='flex justify-between items-center gap-2'>
                    <TextTiny faded>Shipping Cost</TextTiny>
                    <TextXSmall>$25</TextXSmall>
                  </div>
                  <div className='flex justify-between items-center gap-2'>
                    <TextTiny faded>Tax(10%)</TextTiny>
                    <TextXSmall>$538.3</TextXSmall>
                  </div>
                </div>
              </HR>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center gap-2'>
                  <TextXSmall faded>Total</TextXSmall>
                  <TextMid>$3,252.19</TextMid>
                </div>
                <Button fillPrimary>Pay Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
