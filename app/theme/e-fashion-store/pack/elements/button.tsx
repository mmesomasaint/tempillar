'use client'

import { ReactNode } from 'react'

export default function Button({
  children,
  primary,
  outlinePri,
  outlineSec,
}: {
  children: ReactNode | ReactNode[]
  primary?: boolean
  outlinePri?: boolean
  outlineSec?: boolean
}) {
  const outTextColor = outlineSec ? 'text-fashion-store-sec' : 'text-white',
    textColor = outlinePri ? 'text-fashion-store-pri' : outTextColor,
    borderColor =
      primary || outlinePri
        ? 'border-fashion-store-pri'
        : 'border-fashion-store-sec',
    priBgColor = primary ? 'bg-fashion-store-pri' : 'bg-fashion-store-sec',
    bgColor = outlinePri || outlineSec ? 'bg-white' : priBgColor

  return (
    <button
      className={`py-4 px-7 rounded-full shadow-sm border ${borderColor} ${bgColor}`}
    >
      <div className={`flex justify-between items-center gap-4 ${textColor}`}>
        {children}
      </div>
    </button>
  )
}
