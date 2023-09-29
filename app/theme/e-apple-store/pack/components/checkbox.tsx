import { TextTiny } from "../elements/text";

export default function CheckBox({check, setCheck, children}: {children: React.ReactNode, check?: boolean, setCheck?: () => void}) {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className={`w-12 h-12 flex justify-center items-center border ${check ? 'border-apple-store-pri' : 'border-apple-store-faded'}`}>
        
      </div> 
      <TextTiny>{children}</TextTiny>
    </div>
  )
}