export function TextHeader({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-3xl font-semibold ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}

export function TextIntro({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-2xl font-medium ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}

export function TextMid({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-xl font-medium ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}

export function TextBase({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-lg font-medium ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}

export function TextSmall({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-base font-medium ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}

export function TextTiny({
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <div
      className={`text-xs font-medium ${primary && 'bg-apple-store-pri'} ${
        faded && 'bg-apple-store-faded'
      } ${fadedMax && 'bg-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}
