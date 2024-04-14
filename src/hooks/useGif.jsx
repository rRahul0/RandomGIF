import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const useGif = (tag) => {

    const api_key = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

    const [gif, setgif] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (tag) => {
        try {
            setLoading(true);
            const { data } = await axios.get(tag ? (`${url}&tag=${tag}`) : (url));
            const gif = data?.data?.images?.fixed_height_downsampled?.url;
            setgif(gif);
            setLoading(false);
        }
        catch (error) {
            toast.error("Error occured");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return { gif, loading, fetchData };
}
export default useGif;