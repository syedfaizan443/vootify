
import { article } from './data/navdata'
import Poll from './components/Poll'
import Article from './components/Article'


export default function Home() {

  return (
    <main className=" min-h-screen ">
        <Poll></Poll>
        <Article obj={article[0]} id={0}></Article>
      </main>
      
  )
}
