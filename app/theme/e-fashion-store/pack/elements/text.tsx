/** Components representing all the text variants */
export function TextHeadline({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-7xl ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextIntro({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-5xl ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextMid({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-3xl ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextBase({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-2xl ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextSmall({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-xl ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextXSmall({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-none font-medium text-base ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}

export function TextLabel({
  faded,
  children,
}: {
  children: string
  faded?: boolean
}) {
  return (
    <p
      className={`leading-[0] font-medium text-base ${
        faded && 'text-fashion-store-sec-faded'
      }`}
    >
      {children}
    </p>
  )
}
