import React from 'react'
import style from '../styles/progress.module.css'

export default function Article(props) {
    return (
        <div className={`h-[50rem] md:h-[40rem] text-white overflow-hidden flex justify-center items-center ` + ((props.id==0)? style.bgimg1: style.bgimg2)}>
            <div className=' mx-5 flex justify-around items-center flex-col  ' >
               <div className='flex justify-center items-center mb-5'><p className='text-3xl  font-bold'>{props.obj.title}</p></div> 
                <div className='text-xl '>
                    {props.obj.desc}
                    </div>
            </div>
        </div>
    )
}
