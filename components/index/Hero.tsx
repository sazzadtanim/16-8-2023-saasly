import image1 from '@/svg/1.svg'
import dashNew2 from '@/svg/dashNew2.svg'

import Image from 'next/image'
import DynamicButton from '../dynamic/DynamicButton'

export default function Hero() {
  return (
    <div className='mx-auto my-20 w-full max-w-[1100px]'>
      <h1 className='text-desktopH2 mx-auto max-w-[759px] text-center font-bold text-white'>
        Advanced analytics to grow
        <br />
        your business
      </h1>
      <p className='font-lg mx-auto my-6  max-w-[462px] text-center text-neutral-50'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl
        tellus rhoncus, imperdiet
      </p>

      <div className='mx-auto my-12 flex items-center justify-center gap-4'>
        <DynamicButton text='Start Now' state='primary' size='large' />
        <DynamicButton text='trial' state='secondary_white' size='large' />
      </div>

      <div>
        <Image
          src={dashNew2}
          alt='dashboard image'
          width={1215}
          height={895}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
          className='aspect-auto rounded-lg bg-white/10'
        />
      </div>

      <div className='my-4 grid grid-flow-col items-center justify-between rounded-xl px-2 shadow-lg drop-shadow-xl'>
        {[...Array(5)].map((icon, index) => (
          <Image
            key={index}
            src={image1}
            alt={`logo of brand ${icon}`}
            width={146}
            height={48}
            className='aspect-auto p-2'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
          />
        ))}
      </div>
    </div>
  )
}
