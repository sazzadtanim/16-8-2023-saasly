import Icon1 from '@/svg/Icon-1.svg'
import Icon2 from '@/svg/Icon-2.svg'
import Icon3 from '@/svg/Icon-3.svg'
import Icon4 from '@/svg/Icon-4.svg'
import Icon5 from '@/svg/Icon-5.svg'
import Image from 'next/image'
import CTA from './CTA'

export default function Footer() {
  return (
    <div className='bg-footer-bg bg-cover bg-bottom bg-no-repeat pt-20'>
      <CTA />
      <div className='mx-auto flex max-w-screen-mobile items-center justify-center pb-36 pt-36'>
        <div className='footer flex items-center justify-between gap-36 text-white '>
          <div className='flex items-center gap-60'>
            {Saasly}
            {Pages}
            {UtilityPages}
            {MenuPages}
          </div>
        </div>
      </div>
      {FooterLastPart}
    </div>
  )
}

const Pages = (
  <ul className=''>
    <li className='pb-4 text-lg font-bold text-white'> Pages</li>
    <li>Home V1</li>
    <li>Home V2</li>
    <li>Home V3</li>
    <li>About 1</li>
    <li>About 2</li>
    <li>Blog 1</li>
    <li>Blog 2</li>
    <li>Blog Single</li>
    <li>Job 1</li>
    <li>Job 2</li>
    <li>Job Single</li>
    <li>Pricing 1</li>
    <li>Pricing 2</li>
    Help <li>Center 1</li>
  </ul>
)

const UtilityPages = (
  <div className='utilitypages'>
    <ul>
      <li className='pb-4 text-lg font-bold text-white'>Utility pages</li>
      <li>Sign In</li>
      <li>Sign Up</li>
      <li>Forgot Password</li>
      <li>Reset Password</li>
      <li>Email Confirmation</li>
      <li>404 Page</li>
      <li>Coming Soon</li>
      <li>Style Guide</li>
    </ul>
  </div>
)
const MenuPages = (
  <div className='menu'>
    <ul>
      <li className='pb-4 text-lg font-bold text-white'>Help Center</li>
      <li>FAQ V1</li>
      <li>FAQ V2</li>
      <li>FAQ Detail</li>
      <li>Contact V1</li>
      <li>Contact V2</li>
      <li>Checkout</li>
    </ul>
  </div>
)
const Saasly = (
  <div className='logo flex flex-col gap-8'>
    <div className='upper  flex flex-col gap-3'>
      <h3 className='text-desktopH3 font-bold text-white'>Saasly</h3>
      <p className=''>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl
        tellus rhoncus, imperdiet
      </p>
    </div>
    <div className='icons flex gap-4'>
      <Image alt='' src={Icon1} />
      <Image alt='' src={Icon2} />
      <Image alt='' src={Icon3} />
      <Image alt='' src={Icon4} />
      <Image alt='' src={Icon5} />
    </div>
  </div>
)

const FooterLastPart = (
  <p className='pb-4 text-center text-md text-white'>
    Copyright Stairs | Designed by{' '}
    <span className='font-bold text-blue-500'>Design Mate</span> - Powered by
    <span className='font-bold text-blue-500'>Webflow</span>
  </p>
)
