import stackLogo from '@/svg/stack-logo.svg'
import traffic from '@/svg/traffic-growth.svg'
import Image from 'next/image'
import React from 'react'
import DynamicButton from '../dynamic/DynamicButton'

const Feature = (props: {} & React.ComponentProps<'div'>) => (
  <div {...props}>
    <div className='title max-w-[480px]'>
      <div className='text'>
        <div className='icon flex h-16 w-16 items-center justify-center rounded-md bg-gradient-deepBlue'>
          <Image
            src={stackLogo}
            alt='dashboard image'
            width={32}
            height={32}
            className='aspect-auto'
          />
        </div>
        <div className='headline mt-6'>
          <h3 className='text-desktopH3 font-bold text-blue-500'>
            Real Time Data Analytics
          </h3>
          <p className='mb-12 mt-3 text-md text-blue-950'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur{' '}
          </p>
        </div>
      </div>
      <DynamicButton size='large' state='primary' text='Sazzad' />
    </div>
    <Image
      src={traffic}
      alt='feature svg'
      width={509}
      height={406}
      placeholder='blur'
      blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
    />
  </div>
)

export default Feature
