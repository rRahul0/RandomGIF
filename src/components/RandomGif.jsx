import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const RandomGif = () => {

    const { gif, loading, fetchData } = useGif();

    return (

        <div
            className=' bg-slate-300 w-[450px] h-[450px] p-5 rounded-lg shadow-lg
            shadow-gray-500 flex flex-col items-center gap-14 max-sm:w-[300px] '
        >
            <p className=' text-4xl text-cyan-950 font-semibold'>Random GIF</p>

            <div className='h-[200px]'>
                {

                    loading ?
                        (<Spinner />) :
                        (<img src={gif} alt="gif"
                            className='border border-stone-950 rounded-lg' />)
                }
            </div>

            <button
                onClick={() => { fetchData() }}
                className='w-[70%] p-2 text-slate-200 text-xl bg-cyan-600 rounded-md'
            >
                Generate GIF
            </button>
        </div>

    )
}
export default RandomGif