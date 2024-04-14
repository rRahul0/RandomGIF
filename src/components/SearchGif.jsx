import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

const SearchGif = () => {

    const { gif, loading, fetchData } = useGif();

    const [tag, setTag] = useState('Car');

    const submitHandler = (event) => {
        event.preventDefault();
        fetchData(tag);
    }

    return (

        <div
            className=' bg-slate-300 w-[450px] box-border p-5 rounded-lg shadow-lg
            shadow-gray-500 flex flex-col items-center gap-8 max-sm:w-[300px] '
        >
            <p className=' text-4xl text-center text-cyan-950 font-semibold'>
                Search {tag} GIF 
            </p>

            <div className='h-[200px] '>
                {
                    loading ?
                        (<Spinner />) :
                        (<img src={gif} alt="gif"
                            className='border border-stone-950 rounded-lg' />)
                }
            </div>


            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={tag}
                    placeholder="Enter name of emoji you want"
                    onChange={(event) => { setTag(event.target.value) }}
                    className='p-2 rounded-md '
                />
                <br />
            </form>

            <button
                onClick={() => { fetchData(tag) }}
                className='w-[70%] p-2 text-slate-200 text-xl bg-cyan-600 rounded-md'
            >
                Generate GIF
            </button>
        </div>

    )
}
export default SearchGif;