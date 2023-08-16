import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <nav className="mx-auto my-6 flex max-w-[1100px] items-center">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="aspect-auto h-6 dark:invert"
        width={100}
        height={24}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      />

      <ul className="mx-auto flex grow justify-center gap-10 text-md text-white">
        <li className="font-bold ">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Jobs</Link>
        </li>
        <li>
          <Link href="/">Pages</Link>
        </li>
      </ul>

      <div className="flex">
        <button className="flex select-none items-center gap-2 rounded px-6 py-3">
          <span className="text-sm font-bold text-white">Sign in</span>
        </button>

        <button className="flex select-none items-center gap-2 rounded px-6 py-3 ring-2 ring-white">
          <span className="text-sm font-bold text-white">Sign Up</span>
        </button>
      </div>
    </nav>
  )
}
