'use client'

import React from 'react'
import style from '../styles/progress.module.css'
import Image from 'next/image'
import ProgressBar from './ProgressBar'

import { useContext } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'
import Loading from './Loading'
import { voteadd ,  addcock, cockcheck} from '@/app/methods/backend'


export default function VootCard({vote, imgurl, load,objname,keys}) {
    const { btn, setbtn } = useContext(ThemeContext)
    
      

    return (
        <div className={`min-h-[30rem] min-w-[20rem] md:h-[32rem]   flex flex-col justify-center items-center rounded-lg `+style.glass}>
            {
                load?<Loading></Loading>:<div className=' h-5/6   flex justify-between items-center flex-col'>
                <h1 className='text-2xl text-white font-bold mt-5'>{objname}</h1>
                <div className={`h-[16rem] min-w-[17rem] md:h-[18rem] sm:h-[18rem] md:w-5/6 sm:w-5/6 `+style.box}>
                    
                    <Image src={imgurl} className={style.img} height={400} width={400}></Image>
                   
                </div>
                <div>
                <button onClick={ async ()=>{
                    const chk = cockcheck()
                    // const chk = await ipadd() // its return true when ip get stored
                    if(!chk){
                        addcock()
                        voteadd(keys)
                        setbtn(true)
                    }
                    
                }}  disabled={btn}  type="button" className={`text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center `+((btn)?' bg-gray-600':style.btn)}>{(btn)?"Voted":"Vote"}</button>
                </div>
            </div>
            }
            {
                load?null:<div className={`  h-1/6  w-[20rem] flex justify-center items-center `}>
                <div className={`bg-purple-200 w-5/6 h-[2rem] overflow-hidden  rounded-md dark:bg-gray-700`}>
                    <ProgressBar name={vote}></ProgressBar>
                </div>
            </div>
            }
        </div>
    )
}
