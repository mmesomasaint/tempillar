export function ButtonLarge({large, full, outlinePrimary, fillPrimary, fillFaded, children}: {children: React.ReactNode, large?: boolean, full?: boolean, outlinePrimary?: boolean, fillPrimary?: boolean, fillFaded?: boolean}) {
  return (
    <button className={`leading-[0] text-base font-semibold p-2 rounded-2xl border w-fit ${large && 'text-xl'} ${full && 'w-full'} ${outlinePrimary && 'border-apple-store-pri text-apple-store-pri'} ${fillPrimary && 'bg-apple-store-pri border-apple-store-pri text-white'} ${fillFaded && 'bg-white text-apple-store-faded border-apple-store-faded'}`}>
      {children}
    </button>
  )
}