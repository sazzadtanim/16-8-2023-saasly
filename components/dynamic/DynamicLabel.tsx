import React from 'react'

export default function DynamicLabel(
  props: {
    text: string
    textcolor: 'White' | 'colored'
    boxcolor:
      | 'Green'
      | 'Orange'
      | 'Blue'
      | Omit<String, 'Green' | 'Orange' | 'Blue'>
  } & React.ComponentProps<'label'>
) {
  return (
    <label
      className={`flex max-w-fit select-none  items-center gap-2 rounded px-2 py-1  text-sm capitalize   
      ${
        props.boxcolor === 'Green' &&
        props.textcolor === 'White' &&
        'bg-green-500 text-white'
      }
      ${
        props.boxcolor === 'Green' &&
        props.textcolor === 'colored' &&
        'bg-white text-green-500'
      }
      ${
        props.boxcolor === 'Orange' &&
        props.textcolor === 'White' &&
        'bg-[#FFAE00] text-white'
      }
      ${
        props.boxcolor === 'Orange' &&
        props.textcolor === 'colored' &&
        'bg-white text-yellow-500'
      }
      ${
        props.boxcolor === 'Blue' &&
        props.textcolor === 'White' &&
        'bg-blue-500 text-white'
      }
      ${
        props.boxcolor === 'Blue' &&
        props.textcolor === 'colored' &&
        'bg-white text-blue-500'
      }
      `}
      {...props}
    >
      {props.text}
    </label>
  )
}
