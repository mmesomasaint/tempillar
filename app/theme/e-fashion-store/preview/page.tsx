import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { TbShoppingBag } from 'react-icons/tb'
import { TextIntro, TextLabel, TextMid, TextSmall } from '../pack/elements/text'
import Image from 'next/image'

export default function PreviewHome() {
  return (
    <main className=''>
      <div className='flex justify-between items-center gap-40 px-7 py-4'>
        <TextMid>Klamia</TextMid>
        <div className='grow flex justify-center items-center gap-5'>
          <TextSmall>Home</TextSmall>
          <TextSmall fadedMax>Men</TextSmall>
          <TextSmall fadedMax>Women</TextSmall>
          <TextSmall fadedMax>Coming Soon</TextSmall>
        </div>
        <div className='flex justify-end items-center gap-3 text-fashion-store-outline'>
          <TbShoppingBag className='text-fashion-store-sec text-xl' />
          <IoMdNotificationsOutline className='text-fashion-store-sec text-xl' />
          <MdOutlineEmail className='text-fashion-store-sec text-xl' />
          <TextLabel>|</TextLabel>
          <div className='relative w-7 h-7 rounded-full border border-fashion-store-outline'>
            <Image
              src='/imgs/woman-avatar.jpg'
              fill
              alt='avatar'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
