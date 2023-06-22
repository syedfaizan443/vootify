"use client"

import React, { useState } from 'react'
import { list } from '../app/data/navdata'
import Link from 'next/link'
import Image from 'next/image'
import img from '../../public/assets/vlogo.png'

export default function Navbar() {

  const [menu, setmenu] = useState('hidden')
  let lst = []
  list.forEach((x) => lst.push(<li key={list.indexOf(x)}>
    <Link href={x.link} className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>{x.name}</Link>
  </li>))
  return (

    <nav  className={` min-w-[20rem]  dark:bg-gray-900`}>
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <a  className="flex items-center">
          <Image src={img} height={40} width={40} className='mr-4'  alt="Flowbite Logo" ></Image>
          <span className={"self-center text-2xl font-semibold   dark:text-white"}>Vootify</span>
        </a>
        <button onClick={() => (setmenu(prev => (prev === 'hidden') ? '' : 'hidden'))} type="button" className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <Image src='/assets/menulogo.png' height={30} width={30}></Image>
        </button>
        <div className={" w-full md:block md:w-auto " + menu} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            
            {lst}
           
          </ul>
          
        </div>

        

      </div>
    </nav>

  )
}
