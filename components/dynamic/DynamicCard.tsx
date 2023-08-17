import Facebook from '@/svg/facebook.svg'
import google from '@/svg/google.svg'
import twitter from '@/svg/twitter.svg'
import Image from 'next/image'
import DynamicButton from './DynamicButton'

export default function DynamicCard(props: {
  company: 'google' | 'facebook' | 'twitter'
}) {
  return (
    <div
      className={`flex max-w-[284px] flex-col
    rounded bg-white ring-2
      `}
    >
      <div className='flex flex-col items-center gap-12 rounded bg-card-background bg-no-repeat object-fill p-6'>
        <div className='flex flex-col items-center justify-center gap-6'>
          {props.company === 'facebook' && <Image alt='' src={Facebook} />}
          {props.company === 'google' && <Image alt='' src={google} />}
          {props.company === 'twitter' && <Image alt='' src={twitter} />}-
          <div>
            <h4 className='mb-3 text-center text-desktopH4 capitalize text-blue-500'>
              {props.company}
            </h4>
            <p className='max-w-[236px] text-center text-md text-neutral-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              risus dui faucibus eu.
            </p>
          </div>
        </div>
        <DynamicButton size='medium' state='primary' text='learn more' />
      </div>
    </div>
  )
}
