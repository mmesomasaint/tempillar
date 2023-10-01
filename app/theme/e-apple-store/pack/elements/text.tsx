export function TextHeadline({
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
    <p
      className={`leading-none text-3xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
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
    <p
      className={`leading-none text-2xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
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
    <p
      className={`leading-none text-xl font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
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
    <p
      className={`leading-none text-lg font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
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
    <p
      className={`leading-none text-base font-semibold ${
        primary && 'text-apple-store-pri'
      } ${faded && 'text-apple-store-faded'} ${
        fadedMax && 'text-apple-store-faded-max'
      }`}
    >
      {children}
    </p>
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
    <p
      className={`leading-none text-xs font-semibold ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}

export function TextLabel({
  large,
  primary,
  faded,
  fadedMax,
  children,
}: {
  children: React.ReactNode
  large?: boolean
  primary?: boolean
  faded?: boolean
  fadedMax?: boolean
}) {
  return (
    <p
      className={`leading-[0] font-semibold ${
        large ? 'text-base' : 'text-sm'
      } ${primary && 'text-apple-store-pri'} ${
        faded && 'text-apple-store-faded'
      } ${fadedMax && 'text-apple-store-faded-max'}`}
    >
      {children}
    </p>
  )
}
