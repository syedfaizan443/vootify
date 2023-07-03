
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  
  return (
<footer className={` min-w-[20rem] dark:bg-gray-900`}>
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm  sm:text-center dark:text-gray-400">© 2023 vootify. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium  dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link href="/disclaimer" className="mr-4 hover:underline md:mr-6">Disclaimer</Link>
        </li>
        <li>
            <Link href="/termsandconditions" className="mr-4 hover:underline md:mr-6">Terms and Conditions</Link>
        </li>
        <li>
            <Link href="/privacypolicy" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}