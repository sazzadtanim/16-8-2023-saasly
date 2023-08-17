import image1 from '@/svg/1.svg'
import dashNew2 from '@/svg/dashNew2.svg'

import Image from 'next/image'
import DynamicButton from '../dynamic/DynamicButton'

export default function Hero() {
  return (
    <section className='mx-auto my-20 w-full max-w-[1100px]'>
      <h1 className='mx-auto max-w-[759px] text-center font-headerFont text-desktopH2 font-bold text-white'>
        Advanced analytics to grow
        <br />
        your business
      </h1>
      <p className='mx-auto my-6 max-w-[462px]  text-center font-subHeaderFont text-desktopH4 leading-6 text-neutral-50'>
        Unlocking Insights for Strategic Expansion
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
          blurDataURL='data:image/png;base64,L7QcxQ0600~TERM|n#t600~k9w0O'
          className='aspect-auto rounded-lg bg-white/10 drop-shadow-2xl'
        />
      </div>

      <div className='my-4 grid grid-flow-col items-center justify-between divide-x-2 divide-red-800 rounded-xl px-2 shadow-lg drop-shadow-md '>
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
    </section>
  )
}
