"use client"

import React, { useState } from 'react'
import { list } from '../data/navdata'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar2() {

    const [menu, setmenu] = useState('hidden')
    
    return (

        <nav className={` min-w-[20rem]   dark:bg-gray-900`}>
            <div className="max-w-screen-xl  flex flex-wrap justify-around items-center  mx-auto p-4">
                <div >
                    <a className="flex items-center ">
                        {/* <Image src={img} height={40} width={40} className='mr-4'  alt="Flowbite Logo" ></Image> */}
                        <span className={"self-center text-2xl font-semibold   dark:text-white"}>Blog</span>
                    </a>
                </div>
                <button onClick={() => (setmenu(prev => (prev === 'hidden') ? '' : 'hidden'))} type="button" className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Image src='/assets/menulogo.png' height={25} width={25}></Image>
                </button>
                <div className={" w-full   md:block md:w-auto " + menu} id="navbar-default">
                    <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg md:items-center md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                        <Link href='#' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Home</Link>
                        {/* <Link href='#' >
                            <div className='relative    group'>
                                <div className='block md:h-[2.5rem] hover:text-indigo-500 md:flex md:justify-center md:items-center  pl-3 pr-4  text-gray-900 rounded md:border-0  md:p-0 text-white' >Blog</div>
                                <div  className="z-10 md:top-10 hidden group-hover:block md:w-[15rem] md:absolute divide-y divide-gray-100 rounded-lg shadow w-full bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 w-full dark:text-gray-200" >
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Anime</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Technology</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sports</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Entertainment</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Education</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </Link> */}
                        {/* <Link href='/poll' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Poll</Link> */}
                        <Link href='/winner' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Result</Link>
                        <Link href='/battle' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Battle</Link>
                        <Link href='/about' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About us</Link>
                        <Link href='/contact' className={`block py-2 pl-3 pr-4  focus:text-cyan-200 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0  dark:text-white md:dark:hover:text-cyan-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Contact us</Link>
                        
                
                    </ul>
                   

                </div>
                

            </div>
        </nav>

    )
}






