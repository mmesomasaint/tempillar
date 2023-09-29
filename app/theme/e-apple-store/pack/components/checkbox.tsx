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
        className={`w-12 h-12 flex justify-center items-center border border-${color}`}
      >
        <BsCheckLg className={`text-lg text-${color}`} />
      </div>
      <TextTiny>{children}</TextTiny>
    </div>
  )
}
