'use client'

import VootCard from '@/components/VootCard'
import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import style from '../styles/progress.module.css'
import Timer from '@/components/Timer'
import Link from 'next/link'
import {showvotes, cockcheck } from '@/methods/backend'

import { getimage } from '../FirebaseService'

export default function Poll() {

  const { setbtn } = useContext(ThemeContext)
  const { win } = useContext(ThemeContext)
  const { bool } = useContext(ThemeContext)
  const [vote, setVote] = useState({ a: 10, b: 20 })
  const [imgurl, setImages] = useState([])
  const [load, setLoad] = useState(true)
  const [names, setNames] = useState({ a: 'goku', b: 'beast' })
  const keyobj = [{
    key: 1
  }, {
    key: 2
  }]

  useEffect(() => {

    const cockResult = cockcheck();
    setbtn(cockResult);

    const fetchData = async () => {
      try {

        const voteResult = await showvotes();


        setVote((prevVote) => ({
          ...prevVote,
          a: voteResult.a,
          b: voteResult.b,
        }));

        setNames((prevName) => ({
          ...prevName,
          a: voteResult.name1,
          b: voteResult.name2,
        }));

        
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDataAndImage = async () => {
      try {
        const [_, imgList] = await Promise.all([fetchData(), getimage()]);
        setImages(imgList)
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndImage();


  }, [])




  return (
    <div className={` min-h-screen min-w-[20rem] py-10 md:h-auto sm:h-auto flex flex-col  items-center md:justify-center  md:items-center sm:justify-center  sm:items-center ` }>
      <Timer></Timer>
      {(win)?<div className={`min-h-[20rem] min-w-[20rem] md:h-[20rem] text-[1.3rem]  flex flex-col justify-center items-center rounded-lg ` + style.glass}>
            <p className='text-red-500 font-bold'>Vooting End</p>
            <p>Click {<Link href='/winner' className='text-cyan-300'>here</Link>} for Result</p>
            <p>Next poll will start at </p>
            <p className='text-cyan-300 font-bold'>01:00:00</p>
          </div>
          :<div className={` min-w-[10rem] min-h-[10rem]  sm:min-h-[15rem] md:min-w-[40rem] md:min-h-[20rem]   max-w-[50rem] max-h-[60rem] border-red-600 grid md:grid-cols-2 
          md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2  gap-4 `
     }>
     
       <VootCard bool={bool} vote={vote.a} load={load} keys={keyobj[0]} objname={names.a} imgurl={imgurl[0]}></VootCard>
       <VootCard bool={bool} vote={vote.b} load={load} keys={keyobj[1]} objname={names.b} imgurl={imgurl[1]} ></VootCard>
       
   </div>
      }

    </div>
  )
}
