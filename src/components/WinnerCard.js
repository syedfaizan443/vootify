import React from 'react'
import style from '../app/styles/progress.module.css'


export default function WinnerCard(props) {
    return (
        <div className={`min-h-[5rem] ${props.width} ${props.txt}  font-bold  mb-5 flex justify-around items-center  ` + style.glass2+` `+style.textShadow}>
            <div className=' flex justify-center items-center' style={{ flex: '0 0 37%' }}>
                <p>{props.name}</p>
            </div>
            <div className=' flex justify-center items-center' style={{ flex: '1 1 auto' }}>
                <p>{props.vote}</p>
            </div>
            <div className=' flex justify-center items-center' style={{ flex: '0 0 37%' }}>
                <p>{props.date}</p>
            </div>
        </div>
    )
}
