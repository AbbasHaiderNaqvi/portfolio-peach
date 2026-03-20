// components/FadeImage.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function FadeImage(props: any) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      {...props}
      className={`w-full h-auto transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      onLoadingComplete={() => setLoaded(true)}
    />
  )
}