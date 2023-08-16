import DynamicButton from '../dynamic/DynamicButton'

export default function CTA() {
  return (
    <div className='CTA flex flex-col items-center justify-center gap-16 pb-44'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h2 className='text-desktopH2 text-center font-bold text-blue-600'>
          Lets start growing your business
        </h2>

        <p className='max-w-[462px] text-center text-lg text-neutral-500 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
          nisl tellus rhoncus, imperdiet
        </p>
      </div>
      <div className='flex gap-6'>
        <DynamicButton size='medium' state='primary' text='Register now' />
        <DynamicButton size='medium' state='secondary' text='contact us' />
      </div>
    </div>
  )
}
