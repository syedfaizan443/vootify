"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()
export const ThemeProviderr = ({children})=>{
    const [bool,setMode] = useState(true)
    const [btn,setBtn] = useState(true)
    const [win,setWin] = useState(false)

    const setbool =()=>{
        setMode(!bool);
    }

    const setbtn=(x)=>{
        setBtn(x)
    }

    const setwin=(x)=>{
        setWin(x)
    }

   return (
    <ThemeContext.Provider value={{ bool , setbool, btn, setbtn , win, setwin}}>
       <div className={`theme ${bool}`}>{children}</div> 
    </ThemeContext.Provider>
   )
}