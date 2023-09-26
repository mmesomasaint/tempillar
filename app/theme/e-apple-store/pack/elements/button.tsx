export default function Button({
  large,
  full,
  outlinePrimary,
  fillPrimary,
  fillFaded,
  children,
}: {
  children: React.ReactNode
  large?: boolean
  full?: boolean
  outlinePrimary?: boolean
  fillPrimary?: boolean
  fillFaded?: boolean
}) {
  return (
    <button
      className={`leading-[0] text-base font-semibold my-2 p-4 rounded-2xl border ${
        large && 'text-xl my-4 p-6 rounded-3xl'
      } ${full && 'w-full'} ${
        outlinePrimary && 'border-apple-store-pri text-apple-store-pri'
      } ${
        fillPrimary && 'bg-apple-store-pri border-apple-store-pri text-white'
      } ${
        fillFaded && 'bg-white text-apple-store-faded border-apple-store-faded'
      }`}
    >
      {children}
    </button>
  )
}