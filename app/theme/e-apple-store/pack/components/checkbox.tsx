'use client'

import { BsCheckLg } from 'react-icons/bs'
import { TextTiny } from '../elements/text'

export default function CheckBox({
  check,
  setCheck,
  children,
}: {
  children: React.ReactNode
  check?: boolean
  setCheck?: (prev: boolean) => void
}) {
  const color = check ? 'apple-store-pri' : 'apple-store-faded'

  return (
    <div
      className='flex justify-start items-center gap-2'
      onClick={() => setCheck && setCheck(!check)}
    >
      <div
        className={`w-6 h-6 rounded-md flex justify-center items-center border border-${color}`}
      >
        {check && <BsCheckLg className={`text-lg text-apple-store-pri`} />}
      </div>
      <TextTiny faded>{children}</TextTiny>
    </div>
  )
}
