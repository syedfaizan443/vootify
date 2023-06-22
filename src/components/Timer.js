'use client'

import React, { useContext, useEffect, useState } from 'react';
import style from '../app/styles/progress.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


export default function Timer() {
  const [timeString, setTimeString] = useState('00:00:00');
  const {setwin} = useContext(ThemeContext)

  

  useEffect(() => {

    console.log(publicRuntimeConfig.BASE_URL+" hello there");

    const fetchTime = async () => {
      try {
        const response = await fetch('https://backapp.vercel.app/watch');
        const data = await response.json();
        console.log(data);
        setTimeString(data);

        

        if (data !== '23:59:59') {
          const interval = setInterval(() => {
            setTimeString((prevTimeString) => {
              const [hours, minutes, seconds] = prevTimeString.split(':').map(Number);
              
              // Increment the time by 1 second
              const newSeconds = (seconds + 1) % 60;
              const newMinutes = minutes + Math.floor((seconds + 1) / 60);
              const newHours = hours + Math.floor(newMinutes / 60);

              // Format the time string
              const formattedTimeString = `${String(newHours).padStart(2, '0')}:${String(
                newMinutes % 60
              ).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;

              if(formattedTimeString.split(':').map(Number)[0] == 0){
                setwin(true)
              }
              else{
                setwin(false)
              }
              

              // Stop the interval when the time reaches 24:59:59
              if (formattedTimeString === '23:59:59') {
                setTimeString('00:00:00')
                // Call fetchTime to update the time
              }

              return formattedTimeString;
            });
          }, 1000);
        }
        else {
          fetchTime()
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTime();

    return () => {
      // Clean up any active timers or intervals if needed
    };
  }, []);

  return (
    <div className={`grid grid-flow-col gap-5 text-center auto-cols-max mb-10 text-cyan-300 `+style.textShadow}>
     <div className={`flex flex-col min-w-[5rem] p-2 bg-neutral rounded-md text-neutral-content ${style.glass} `}>
        <span className="countdown font-mono text-5xl">
          <span >{timeString.split(':')[0]}</span>
        </span>
        hours
      </div>
      <div className={`flex flex-col min-w-[5rem] p-2 bg-neutral rounded-md text-neutral-content ${style.glass}`}>
        <span className="countdown font-mono text-5xl">
          <span>{timeString.split(':')[1]}</span>
        </span>
        min
      </div>
      <div className={`flex flex-col min-w-[5rem] p-2 bg-neutral rounded-md text-neutral-content ${style.glass}`}>
        <span className="countdown font-mono text-5xl">
          <span>{timeString.split(':')[2]}</span>
        </span>
        sec
      </div>
      
    </div>
  );
}
