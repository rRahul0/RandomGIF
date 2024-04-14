import RandomGif from './components/RandomGif';
import SearchGif from './components/SearchGif';


function App() {

  return (

    <div className='w-full min-h-screen h-[100%] p-10 box-border bg-slate-800
     flex flex-col gap-32 items-center  max-sm:gap-14 max-sm:py-14 max-lg:p-4 '>

      <h2 className='text-6xl font-extrabold text-white max-sm:text-5xl '>
        RANDOM GIFS
      </h2>

      <div className=' flex flex-wrap items-center justify-center gap-32 max-sm:flex-col'>
        <RandomGif />
        <SearchGif />
      </div>

    </div>

  )
}

export default App;