'use client'

import { useState, useEffect } from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import DropDown, { DropDownMultiple } from '../../pack/components/dropdown'
import { InputBarButton, InputBarIcon } from '../../pack/components/inputBar'
import {
  TextBase,
  TextIntro,
  TextLabel,
  TextMid,
  TextTiny,
  TextXSmall,
} from '../../pack/elements/text'
import Accordion from '../../pack/components/accordion'
import CheckBox from '../../pack/components/checkbox'
import { HR } from '../../pack/elements/rule'
import { products, Product } from '../lib/products'
import Card from '../../pack/components/product/card'
import Range from '../../pack/components/range'
import Image from 'next/image'
import { Filter, DefaultFilter, FilterSection } from '../lib/filter'
import Search from '../lib/search'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Slider from '../../pack/components/product/slider'
import OutlineButtons, {
  OutlineButton,
} from '../../pack/components/outline-btns'
import Button from '../../pack/elements/button'
import EditAmount from '../../pack/components/editAmount'
import Tab from '../../pack/components/tab'

export default function Home() {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState<Product[]>(products)
  const [filter, setFilter] = useState<Filter>(DefaultFilter)

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

  useEffect(() => {
    const newResults = Search(searchText, filter)
    setSearchResults(newResults)
  }, [searchText, filter])

  return (
    <main className='min-h-screen flex flex-col'>
      <div className='flex border-y border-apple-store-outline-faded-max justify-between items-center gap-40 px-7 py-4'>
        <TextIntro primary>iStore</TextIntro>
        <div className='grow flex justify-center items-center gap-5'>
          <DropDownMultiple
            title={'Categories'}
            selectedItems={['Macbook', 'iPhone', 'iWatch']}
            items={['Macbook', 'iMac', 'iPhone', 'Airpod', 'iWatch']}
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
            <TextTiny faded>Macbook</TextTiny>
            <TextTiny faded>
              <BsStar className='text-base' />
            </TextTiny>
            <TextTiny>Apple Macbook Pro 14'' 2022 | M2 Max Chip</TextTiny>
          </span>
        </div>
        <div className='grow grid grid-cols-[repeat(14,_minmax(0,_1fr))] gap-5 place-items-start'>
          <div className='col-span-4 w-full '>
            <Slider
              srcList={[
                '/imgs/macbook-pro-fv-1.webp',
                '/imgs/macbook-pro-sv.jpg',
                '/imgs/mackbook-pro-tv.webp',
                '/imgs/macbook-pro-sv-3.jpeg',
                '/imgs/macbook-pro-tv-2.jpeg',
              ]}
            />
          </div>
          <div className='col-span-7 flex flex-col justify-between items-stretch gap-5 w-full'>
            <HR>
              <div className='flex flex-col gap-4'>
                <TextMid faded>
                  Apple Macbook Pro 14'' 2022 | M2 Max Chip
                </TextMid>
                <TextIntro>$2,915</TextIntro>
                <div className='flex justify-start items-center gap-4'>
                  <div className='flex justify-start items-center gap-2'>
                    <BsStarFill className='text-base text-yellow-500' />
                    <TextTiny faded>4.8</TextTiny>
                  </div>
                  <div className='flex justify-start gap-1'>
                    <TextTiny faded>680</TextTiny>
                    <TextTiny faded>sold</TextTiny>
                  </div>
                </div>
              </div>
            </HR>
            <HR>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <TextXSmall>Color</TextXSmall>
                  <div className='flex justify-start items-center gap-2'>
                    {['gray', 'lime', 'red'].map((color) => (
                      <div
                        key={color}
                        className='w-6 h-6 rounded-full border border-apple-store-outline-faded-max'
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <TextXSmall>Processor</TextXSmall>
                  <div className='flex gap-3 justify-start items-center'>
                    <OutlineButton selected={true}>
                      16GB, 16 Core GPU Apple M2 Chip
                    </OutlineButton>
                    <OutlineButton selected={false}>
                      32GB, 32 Core GPU Apple M2 Chip
                    </OutlineButton>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <TextXSmall>Memory Size</TextXSmall>
                  <div className='flex gap-3 justify-start items-center'>
                    <OutlineButton selected={true}>512GB</OutlineButton>
                    <OutlineButton selected={false}>1TB</OutlineButton>
                  </div>
                </div>
              </div>
            </HR>
            <HR>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-start items-center gap-2'>
                  <BsStar className='text-base text-apple-store-faded' />
                  <div className='flex justify-start items-center gap-1'>
                    <TextTiny faded>Sent from</TextTiny>
                    <TextXSmall>Umuaguduani Street, Port Harcourt</TextXSmall>
                  </div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <BsStar className='text-base text-apple-store-faded' />
                  <div className='flex justify-start items-center gap-1'>
                    <TextTiny faded>Shipping Cost</TextTiny>
                    <TextXSmall>$20</TextXSmall>
                  </div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <BsStar className='text-base text-apple-store-faded' />
                  <div className='flex justify-start items-center gap-1'>
                    <TextTiny faded>Estimated Delivery</TextTiny>
                    <TextXSmall>3 days</TextXSmall>
                  </div>
                </div>
              </div>
            </HR>
            <Tab titles={['Detail', 'Specification']}>
              <TextTiny faded copy>
                The new Macbook Pro delivers outstanding performance for pro
                users. Choose between the reliable M2 pro or even the more
                reliable M2 max to power up your pro level workflows and get
                incredible battery life. With a stunning 13-inch retina XDR
                display and a range of pro ports, you can't just imagine this
                feeling. You experience it.
              </TextTiny>
              <div className='flex flex-col gap-2 text-apple-store-faded'>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Display</TextTiny>
                  <TextXSmall fadedMax>14-inch XDR display</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Color</TextTiny>
                  <TextXSmall fadedMax>Silver Gray / Red / Silver</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Ram</TextTiny>
                  <TextXSmall fadedMax>16GB / 32GB</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Chip</TextTiny>
                  <TextXSmall fadedMax>M2 Pro</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>GPU</TextTiny>
                  <TextXSmall fadedMax>16 Core / 32 Core</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Display</TextTiny>
                  <TextXSmall fadedMax>XDR display</TextXSmall>
                </div>
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny>Display</TextTiny>
                  <TextXSmall fadedMax>XDR display</TextXSmall>
                </div>
              </div>
            </Tab>
          </div>
          <div className='col-span-3 h-fit w-full flex flex-col gap-5 bg-white rounded-xl border border-apple-store-outline-faded-max p-5'>
            <HR>
              <div className='flex flex-col gap-2'>
                <TextXSmall>Set Quantity</TextXSmall>
                <EditAmount value={1} full />
                <div className='flex justify-start items-center gap-1'>
                  <TextTiny faded>Only</TextTiny>
                  <TextTiny primary>10 items</TextTiny>
                  <TextTiny faded>left</TextTiny>
                </div>
              </div>
            </HR>
            <HR>
              <div className='flex flex-col gap-2'>
                <TextXSmall>Add Notes</TextXSmall>
                <textarea
                  rows={6}
                  className='p-2 border border-apple-store-outline-faded-max rounded-xl text-xs'
                  placeholder='Type here..'
                />
              </div>
            </HR>
            <div className='flex flex-col gap-3'>
              <div className='flex justify-between items-center gap-2'>
                <TextTiny faded>Sum Total</TextTiny>
                <TextMid>$2,915</TextMid>
              </div>
              <div className='flex flex-col gap-2'>
                <Button fillPrimary>Buy Now</Button>
                <Button outlinePrimary>Add to Cart</Button>
              </div>
              <div className='flex justify-between items-center gap-2 text-apple-store-outline-faded-max'>
                <div className='flex justify-start items-center gap-1'>
                  <BsStar className='text-base text-apple-store-faded-max' />
                  <TextTiny faded>Chat</TextTiny>
                </div>
                <TextLabel>|</TextLabel>
                <div className='flex justify-start items-center gap-1'>
                  <BsStar className='text-base text-apple-store-faded-max' />
                  <TextTiny faded>Wishlist</TextTiny>
                </div>
                <TextLabel>|</TextLabel>
                <div className='flex justify-start items-center gap-1'>
                  <BsStar className='text-base text-apple-store-faded-max' />
                  <TextTiny faded>Share</TextTiny>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
