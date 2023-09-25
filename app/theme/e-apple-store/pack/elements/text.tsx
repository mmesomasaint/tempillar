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
      className={`text-3xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`text-2xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`text-xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`text-lg font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`text-base font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
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
      className={`text-xs font-medium ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </div>
  )
}
