import Facebook from '@/svg/facebook.svg'
import Google from '@/svg/google.svg'
import Twitter from '@/svg/twitter.svg'
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
      <div className='bg-card-background flex flex-col items-center gap-12 rounded bg-no-repeat object-fill p-6'>
        <div className='flex flex-col items-center justify-center gap-6'>
          {props.company === 'facebook' ? <Facebook /> : ''}
          {props.company === 'google' ? <Google /> : ''}
          {props.company === 'twitter' ? <Twitter /> : ''}
          <div>
            <h4 className='text-desktopH4 mb-3 text-center capitalize text-blue-500'>
              {props.company}
            </h4>
            <p className='text-md max-w-[236px] text-center text-neutral-500'>
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
