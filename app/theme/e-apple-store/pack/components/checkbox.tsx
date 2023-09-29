import { TextTiny } from "../elements/text";

export default function CheckBox({setCheck, children}: {children: React.ReactNode, setCheck?: () => void}) {
  return (
    <div className="flex justify-start items-center gap-2">
      <div>
        
      </div>
      <TextTiny>{children}</TextTiny>
    </div>
  )
}