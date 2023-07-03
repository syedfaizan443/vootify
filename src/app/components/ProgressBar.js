

import React from 'react'
import style from '../styles/progress.module.css'

export default function ProgressBar(props) {

   

  return (
    <div className='h-full w-full  relative w-4/6 '>
                        <div className={style.progress_bar} style={{width:`${props.name}%`}}>
                                <h1>{props.name}%</h1>
                        </div>
     </div>
  )
}
