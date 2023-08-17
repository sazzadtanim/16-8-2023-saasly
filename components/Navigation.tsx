import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <nav className='mx-auto my-6 flex max-w-[1100px] items-center'>
        {/* logo */}
        <span className='font-subHeaderFont text-desktopH3 font-black tracking-tight text-white'>
          Marketo
        </span>

        <ul className='mx-auto flex grow justify-center gap-10 text-md text-white'>
          <li className='decoration-clone font-bold decoration-2 underline-offset-8 hover:underline'>
            <Link href='/'>Home</Link>
          </li>
          <li className='decoration-solid decoration-2 underline-offset-8 hover:underline'>
            <Link href='/'>About</Link>
          </li>
          <li className='decoration-solid decoration-1 underline-offset-8 hover:underline'>
            <Link href='/'>Pricing</Link>
          </li>
          <li className='decoration-solid decoration-1 underline-offset-8 hover:underline'>
            <Link href='/'>Blog</Link>
          </li>
          <li className='decoration-solid decoration-1 underline-offset-8 hover:underline'>
            <Link href='/'>Jobs</Link>
          </li>
          <li className='decoration-solid decoration-1 underline-offset-8 hover:underline'>
            <Link href='/'>Pages</Link>
          </li>
        </ul>
        {/* right section */}
        <div className='flex'>
          <button className='flex select-none items-center gap-2 rounded px-6 py-3'>
            <span className='text-sm font-bold text-white hover:text-deepBlue-950 '>
              Sign in
            </span>
          </button>
          <button className='flex select-none items-center gap-2 rounded px-6 py-3 ring-2 ring-white'>
            <span className='text-sm font-bold text-white'>Sign Up</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
