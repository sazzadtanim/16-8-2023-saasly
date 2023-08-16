import React, { HTMLInputTypeAttribute } from 'react'

export default function DynamicInput(
  props: {
    state: 'Default' | 'Active' | 'Hover' | 'Error'
    label_T: string
    label_BL?: string
    label_BR?: string
    icon: React.ReactElement
    placeholder: string
    inputType?: HTMLInputTypeAttribute
  } & React.ComponentProps<'div'>
) {
  return (
    <div className="mb-6 flex max-w-md flex-col">
      <label
        className="text-md font-bold capitalize
      "
      >
        {props.label_T}
      </label>

      <div
        className={`mt-2 flex max-w-md gap-2 rounded bg-white py-4 ring-1 ring-neutral-400 
        ${props.state === 'Active' && 'ring-purple-400'}`}
      >
        <i
          className={`ml-6 fill-neutral-400 ${
            props.state === 'Active' && 'fill-purple-400'
          }`}
        >
          {props.icon}
        </i>
        <input
          type={props.inputType}
          placeholder={props.placeholder}
          className="w-full max-w-md text-md outline-none placeholder:capitalize"
        />
        <i
          className={`mr-6 fill-neutral-400 
          ${props.state === 'Active' && 'fill-purple-400'}
          
          `}
        >
          {props.icon}
        </i>
      </div>
      <div className="relative">
        {props.label_BL && (
          <label className="absolute left-0 top-0 mt-[6px] flex items-center gap-[6px] text-sm capitalize">
            <input type="checkbox" className="border-neutral-400" />

            <span className="text-neutral-500 ">{props.label_BL}</span>
          </label>
        )}
        {props.label_BR && (
          <label className="absolute right-0 top-0 bg-gradient-purple bg-clip-text text-[transparent]">
            {props.label_BR}
          </label>
        )}
      </div>
    </div>
  )
}
