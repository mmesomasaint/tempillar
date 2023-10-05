'use client'

import { useState, Children, ReactNode } from "react"
import { TextXSmall } from "../elements/text"

export default function Tab({titles, children}: {titles: string[], children: ReactNode | ReactNode[]}) {
  const [activeId, setActiveId] = useState<number>(0)
  const childElements = Children.toArray(children)

  const onSetActive = (value: string) => {
    const idx = titles.findIndex((title) => title === value)
    if (idx === -1) throw new Error("Title must be in titles prop")
    setActiveId(idx)
  }

  return (
    <div>
      <div className="flex justify-start items-center gap-2 border-b border-apple-store-outline-faded-max w-full">
        {titles.map(title => (<TabTitle key="title" title={title} active={title === titles[activeId]} setActive={(value: string) => onSetActive(value) } /> ))}
      </div>
      <div className="py-4">
        {childElements[activeId]}
      </div>
    </div>
  )
}

function TabTitle({active, setActive, title}: {active: boolean, setActive: (value: string) => void, title: string}) {
  return (
    <div className="relative w-fit py-2 px-5" onClick={() => setActive(title)}>
      <TextXSmall primary={active} fadedMax={!active}>{title}</TextXSmall>
      <div className={`absolute -bottom-1 w-full border ${active ? 'border-apple-store-pri' : 'border-apple-store-outline-faded-max'}`} />
    </div>
  )
}