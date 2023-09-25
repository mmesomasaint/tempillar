import Image from "next/image"
import { useState } from "react"

export default function Slider({srcList}: {srcList: string[]}) {
  const [activeSrc, setActiveSrc] = useState<string>(srcList[0])

  return (
    <div>
      <div>
        <Image src={activeSrc} width={400} height={400} alt='main-image' />
      </div>
      <div>{srcList.map((src, id) => (
        <Image onClick={() => setActiveSrc(src)} key={src} src={src} width={50} height={50} alt={`thumbnail-${id+1}`} />
      ))}</div>
    </div>
  )
}