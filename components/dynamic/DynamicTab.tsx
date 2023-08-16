import React from 'react'

export default function DynamicTab(
  props: {
    text: string
    state: 'active' | 'inactive'
  } & React.ComponentProps<'label'>
) {
  return (
    <label
      className={`flex max-w-fit select-none items-center gap-2 rounded px-6 py-2 text-md  font-bold capitalize  
        ${
          props.state === 'inactive'
            ? 'bg-blue-600 text-white'
            : 'ring-2 ring-blue-600'
        }

      `}
      {...props}
    >
      {props.text}
    </label>
  )
}
