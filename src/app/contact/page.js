'use client'

import React from 'react'
import style from '../styles/progress.module.css'
import Image from 'next/image'

export default function page() {
  const temp = 'For any queries, website development, sponsorship opportunities, or business inquiries, please feel free to contact us. We are here to assist you and explore potential collaborations. Simply reach out to us using the contact information provided below:'

  const handleClick = () => {
    window.open("https://www.instagram.com/beast.gohan_ig?igshid=MzNlNGNkZWQ4Mg==", "_blank");
  };

  return (
    <div className='min-h-screen min-w-[20rem]   flex items-center justify-center  flex-col'>

      <div className='w-5/6 px-5 h-[40rem] md:h-[30rem] flex flex-col justify-around items-center'>
        <p className='text-[25px] font-bold text-white'>Contact us</p>
        <div className='w-[25rem] md:w-[35rem] my-2 text-white'><p>{temp}</p></div>
        <div className='md:w-4/6 md:min-w-[35rem] w-[18rem] flex-col md:flex-row h-[30rem] md:h-[15rem]  flex justify-around items-center '>
          <div className={`min-h-[14rem] min-w-[15rem] flex flex-col justify-around items-center ` + style.glass} >
            <div ><Image src='/assets/insta.png' height={50} width={50} ></Image></div>
            <div>
            <button onClick={handleClick} type="button" className={`text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center `+style.btn}>Click</button>
            </div>
          </div>
          <div className={`h-[14rem] w-[15rem] flex flex-col justify-around items-center ` + style.glass} >
             <Image src='/assets/email.png' height={50} width={50}></Image>
             <div className='w-5/6 flex flex-col justify-center items-center px-3 text-white font-bold'><p >Email</p><p>sfaizanuddin408@gmail.com</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
