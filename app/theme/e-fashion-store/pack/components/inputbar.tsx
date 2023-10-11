export default function InputBar({text, setText, placeholder, full}: {text: string, setText: (text: string) => void, placeholder: string, full?: boolean}) {
  return (
    <input placeholder={placeholder ?? "Search"} value={text} onChange={e => setText(e.target.value)} className={`border border-fashion-store-outline pl-10 pr-3 py-2 rounded-full bg-white text-base font-medium ${full && 'w-full'}`} />
  )
}