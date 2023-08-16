import Illustration from '@/svg/Illustration.svg'
import stackLogo from '@/svg/stack-logo.svg'
import Image from 'next/image'
import DynamicButton from '../dynamic/DynamicButton'

export default function WhyUs() {
  return (
    <section>
      <div className='mx-auto flex max-w-[1100px] flex-col items-center'>
        <h2 className='text-desktopH2 text-deepBlue-600 mx-auto text-center font-bold'>
          We optimize marketing for <br /> business continuity
        </h2>

        <div className='flex'>
          <div className='flex flex-col gap-16'>
            {[...Array(2)].map(item => (
              <div className='category_card' key={item}>
                <div>
                  <div className='bg-gradient-deepBlue inline-block rounded p-4'>
                    <Image
                      src={stackLogo}
                      alt='dashboard image'
                      width={32}
                      height={32}
                      className='aspect-auto'
                      placeholder='blur'
                      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
                    />
                  </div>
                  <div className='text mb-9 mt-6 max-w-[226px]'>
                    <h4 className='text-desktopH4 max-w-[159px] font-bold text-blue-500'>
                      Accurate Data Science
                    </h4>
                    <p className='text-md mt-3 text-neutral-500 antialiased'>
                      Cum sociis natoque penatibus et magnis dis parturient
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={Illustration}
              alt='dashboard image'
              width={679}
              height={701}
              className='aspect-auto'
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
            />
          </div>

          <div className='flex flex-col items-center gap-16'>
            {[1, 2].map(item => (
              <div className='category_card' key={item}>
                <div>
                  <div className='bg-gradient-deepBlue inline-block rounded p-4'>
                    <Image
                      src={stackLogo}
                      alt='dashboard image'
                      width={32}
                      height={32}
                      className='aspect-auto'
                      placeholder='blur'
                      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
                    />
                  </div>
                  <div className='text mb-9 mt-6 max-w-[226px]'>
                    <h4 className='text-desktopH4 max-w-[159px] font-bold text-blue-500'>
                      Accurate Data Science
                    </h4>
                    <p className='text-md mt-3 text-neutral-500 antialiased'>
                      Cum sociis natoque penatibus et magnis dis parturient
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=''>
          <DynamicButton text='learn more' state='primary' size='large' />
        </div>
      </div>
    </section>
  )
}
