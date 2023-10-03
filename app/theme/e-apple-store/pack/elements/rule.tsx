export function HR({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`border-b border-apple-store-outline-faded-max w-full ${
        children && 'pb-3'
      }`}
    >
      {children}
    </div>
  )
}
