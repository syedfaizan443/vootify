'use client'

import React, { useEffect , useState} from 'react'
import WinnerCard from '@/components/WinnerCard'
import { showWin } from '@/methods/backend'

export default function page() {
  const [winner,setWinner] = useState([])

  useEffect(()=>{
      const fetchdata =async()=>{
          const data = await showWin();
          setWinner(data)
          console.log(data);
      }

      fetchdata()
  },[])

  const list =[]
  winner.forEach((x)=>{
    list.push( <WinnerCard name={x.win} txt={'text-[0.8rem] text-white'} vote={x.votes} date={x.date} width='w-full'></WinnerCard>)
  })
  const text ='text-cyan-300 text-[1.2rem]'
    
  
  return (
    <div className='min-h-screen min-w-[20rem] pt-5   flex items-center  flex-col'>
      <WinnerCard  width='w-4/6 min-w-[20rem] ' txt={text} name='Name' vote='Votes' date='Date'></WinnerCard>
     <div className='min-h-screen min-w-[20rem] my-5 max-h-screen overflow-scroll w-4/6 '>
     {list}
     </div>
      
    </div>
  )
}
