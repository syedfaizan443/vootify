'use client'
import { showCharacter } from '@/app/methods/backend';
import style from '../styles/progress.module.css'
import Image from 'next/image'
import React, {  useState } from 'react';
import Article from '../components/Article';
import { article } from '../data/navdata';


const category = [
  { name: 'Dragon Ball Super' },
  { name: 'Super Dragon Ball Heroes' },
];





export default function page() {

  const [winner, setWinner] = useState([false, false])
  const [images1, setImages1] = useState('/assets/qm.jpg')
  const [images2, setImages2] = useState('/assets/qm.jpg')
  const [btn, setBtn] = useState([false, false])
  const [data1, setData1] = useState({
    name: 'N0 Character Selected',
    power: 1,
    img: '',
    gif: ''
  })

  const [data2, setData2] = useState({
    name: 'N0 Character Selected',
    power: 0,
    img: '',
    gif: ''
  })

  const getData = async (id) => {
    setWinner([false,false])
    if (id == 1 || id== 10) {
      setData1(prevData2 => ({
        ...prevData2,
        name: 'Searching'
      }));
     
      
      setImages1('/assets/search.gif')
      if(id==1){
        setTimeout(()=>{
          setBtn([!btn[0], btn[1]])
        },1000)
      }

      if(id==10){
        setTimeout(()=>{
          setBtn([true,true])
        },1000)
      }
    }
    else if(id ==2 || id == 20){
      setData2(prevData2 => ({
        ...prevData2,
        name: 'Searching'
      }));
      
      setImages2('/assets/search.gif')
      if(id==2){
        setTimeout(()=>{
          setBtn([btn[0], !btn[1]])
        },1000)
      }
    }

    const response = await showCharacter(selectedCountry)
    setTimeout(() => {
      if (id == 1 || id == 10) {
        setData1(response);
        setImages1(response.img)
      }
      else if(id == 2|| id == 20) {
        setData2(response);
        setImages2(response.img)
      }
    }, 1000)

  }

  const fight = () => {
    if (data1.power > data2.power) {
      setWinner([true, false])
      setImages1(data1.gif || images1)
    }
    else if (data1.power == data2.power) {
      setWinner([true, true])
      setImages2(data2.gif || images2)
      setImages1(data1.gif || images1)
    }
    else {
      setWinner([false, true])
      setImages2(data2.gif || images2)
    }
    setBtn([false,false])

  }

  const selectMobile = async () => {
    setWinner([false, false])
    await getData(10)
    await getData(20)
    
    
  }

  const reset = () => {
    setWinner([false, false])
    setImages1('/assets/qm.jpg')
    setImages2('/assets/qm.jpg')
    setBtn([false, false])
    setData1({
      name: 'N0 Character Selected',
      power: 0,
      img: '',
    })
    setData2({
      name: 'N0 Character Selected',
      power: 0,
      img: '',
    })
  }

  const [selectedCountry, setSelectedCountry] = useState({ id: 0, name: category[0].name });

  return (<div>
    <div className={` min-h-screen flex flex-col justify-center items-center `}>
      <div className=' h-[5rem] flex justify-center items-center'>
        <DropDownMenu selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}></DropDownMenu>
      </div>
      <div className=' border hidden md:grid md:grid-cols-2 md:grid-rows-1 gap-5  '>
        <TabCard id={0} btnDisable={btn[0]} getDatafunc={() => getData(1)} win={winner[0]} name={data1.name} imgurl={images1}></TabCard>
        <TabCard id={1} btnDisable={btn[1]} getDatafunc={() => getData(2)} win={winner[1]} name={data2.name} imgurl={images2}></TabCard>
      </div>
      <div className={`grid md:hidden lg:hidden xl:hidden   `+style.box}>
        <MobileCard win={[winner[0], winner[1]]} name={[data1.name, data2.name]} imgurl={[images1, images2]}></MobileCard>
      </div>
      <div className=' h-[5rem] w-[18rem] flex justify-around items-center'>
        <button onClick={() => fight()} disabled={!(btn[0] && btn[1])} className={`text-white font-medium rounded-lg text-sm px-5 py-2.5  text-center ` + ((btn[0] && btn[1]) ? style.btn : 'bg-slate-500')}>Fight</button>
        <button onClick={() => selectMobile()} className={`text-white md:hidden block  font-medium rounded-lg text-sm px-5 py-2.5  text-center ` + style.btn}>Select</button>
        <button onClick={() => reset()} className={`text-white  font-medium rounded-lg text-sm px-5 py-2.5  text-center ` + style.btn}>Reset</button>
      </div>

    </div>
    <Article obj={article[1]} id={1}></Article>
    </div>
  )
}

function TabCard(props) {

  return <div className={`min-h-[30rem] min-w-[20rem] md:h-[32rem]   flex flex-col justify-around items-center rounded-lg ` + style.glass}>
    <h1 className='text-2xl text-white font-bold mt-5'>{props.name}</h1>
    <div className={`h-[16rem] min-w-[17rem] md:h-[18rem] sm:h-[18rem] md:w-5/6 sm:w-5/6 ` + style.box}>

      <Image src={props.imgurl} className={style.img2} height={400} width={300} alt='character'></Image>
      <p className={`text-3xl font-bold  absolute bottom-5 bg-black text-cyan-500 px-4 rounded`}>{(props.win) ? 'WINNER' : ''}</p>
    </div>
    <button onClick={() => props.getDatafunc()} disabled={props.btnDisable} type="button" className={`text-white  font-medium rounded-lg text-sm px-5 py-2.5  text-center ` + ((props.btnDisable) ? 'bg-slate-500' : style.btn)}>Select</button>
  </div>
}

function MobileCard(props) {

  return <div className=' flex justify-center md:hidden items-center flex-col'>
    <h1 className='text-1xl  text-white font-bold mt-5'>{props.name[0]}</h1>


    <div className={`h-[27rem] w-full grid grid-cols-1 grid-rows-2   `}>


      <div className={` relative `}>


        <Image src={props.imgurl[0]} className={style.img2} height={300} width={300} alt='character'></Image>
        <div className='absolute bottom-2 flex justify-center items-center w-full'>
          <p className={`text-3xl font-bold   bg-black text-indigo-400 px-4 rounded`}>{+(props.win[0]) ? 'WINNER' : ''}</p>
        </div>
      </div>
      <div className={` relative `}>

        <Image src={props.imgurl[1]} className={style.img2} height={400} width={300} alt='character'></Image>
        <div className='absolute bottom-2 flex justify-center items-center w-full'>
          <p className={`text-3xl font-bold   bg-black text-indigo-400 px-4 rounded`}>{+(props.win[1]) ? 'WINNER' : ''}</p>
        </div>
      </div>

    </div>
    <h1 className='text-1xl text-white font-bold mt-5'>{props.name[1]}</h1>
  </div>
}

function DropDownMenu(props) {



  const [isOpen, setIsOpen] = useState(false);

  const handleCountryChange = (country) => {
    props.setSelectedCountry(country);
    setIsOpen(false);
  };

  return <div className="relative">
    <button
      id="dropdownDefaultButton"
      className="text-white bg-slate-600 min-w-[11rem] flex justify-around items-center font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
      onClick={() => setIsOpen(!isOpen)}
    >
      {props.selectedCountry.name} <svg className="w-4 h-4 ml-2" aria-hidden="true"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>

    {isOpen && (
      <div id="dropdown" className="absolute z-10  rounded-lg shadow w-44 bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {category.map((cat) => (
            <li key={cat.id}>
              <a
                href="#"
                className="block px-4 py-2  hover:bg-gray-600"
                onClick={() => handleCountryChange(cat)}
              >
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}

  </div>


}


