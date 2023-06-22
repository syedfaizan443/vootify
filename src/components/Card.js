
import React from 'react'
import style from '../app/styles/progress.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props) {


    return (
       
        <div className={`max-w-sm flex flex-col items-center justify-around bg-white  rounded-lg shadow `+style.glass}>
                <div className='h-[6rem] mt-5 w-5/6  flex justify-center items-center '>
                    <Image  src={props.img}   alt="My Image" height={100} width={100} ></Image>
                </div>
                <div className='h-1/6'>
                <h5 className={`mb-2 text-2xl font-bold tracking-tight  text-white `}>{props.name}</h5>

                </div>
               <div className='h-1/6'>
               <Link href={props.link}><button type="button" className={`text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-bold `+((props.link!='')?style.btn:' bg-gray-600')}>{(props.link!='')?"Click":"Locked"}</button></Link>
               </div>
            </div>
    )
}
