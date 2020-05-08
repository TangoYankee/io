declare module 'react'

declare module 'react-dom'

declare module '*.jpg' {
  const jpeg: string
  export = jpeg
}

declare module '*.ico' {
  const ico: string
  export = ico
}

declare module '*.png' {
  const png: string
  export = png
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
