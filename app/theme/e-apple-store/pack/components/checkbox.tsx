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
  return (
    <div
      className='flex justify-start items-center gap-2'
      onClick={() => setCheck && setCheck(!check)}
    >
      <div
        className={`w-[1.18rem] h-[1.18rem] rounded-md flex justify-center items-center border ${
          check ? 'border-apple-store-pri' : 'border-apple-store-faded'
        }`}
      >
        {check && <BsCheckLg className={`text-lg text-apple-store-pri`} />}
      </div>
      <TextTiny faded={!check} primary={check}>
        {children}
      </TextTiny>
    </div>
  )
}
