import Image from 'next/image'
import React from 'react'

export default function DynamicTabNavigation(
  props: {
    text: string
    state: 'active' | 'inactive'
  } & React.ComponentProps<'label'>
) {
  return (
    <label
      className={`flex max-w-[233px] select-none  items-center gap-3 rounded 
      py-2 pl-2 text-lg capitalize  
        ${props.state === 'active' ? 'bg-white font-bold text-blue-600' : ''}

      `}
      {...props}
    >
      <Image
        src={'/assets/png/paint-icon.png'}
        alt="tab navvigation icon"
        width={48}
        height={48}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      />{' '}
      <span>{props.text}</span>
    </label>
  )
}
