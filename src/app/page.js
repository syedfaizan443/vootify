
import Card from '@/components/Card'
import { cardList } from './data/navdata'


export default function Home() {
  const temp=[]
  

  cardList.forEach((x)=>temp.push(<Card key={cardList.indexOf(x)} img={x.url} link={x.link}  name={x.name}></Card>))
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24 ">
        <div className={` border border-red-500 md:h-[18rem] md:min-w-[48rem] sm:h-[30rem] p-5 w-10/12 h-[75rem] md:w-10/12 sm:w-11/12 sm:min-w-[30rem] min-w-[350px]  grid gap-4  
        lg:grid-rows-1 lg:grid-cols-4 md:grid-cols-4 md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2`}>
            {temp}
        </div>
        

      </main>
  )
}
