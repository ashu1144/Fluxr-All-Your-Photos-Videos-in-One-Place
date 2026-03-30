import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const PIXELS_KEYS = import.meta.env.VITE_PIXELS_KEY;
  

export async function fetchPhotos(query,per_page=30){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data?.results;
}


export async function fetchVideos(query,per_page=20) {
    const res = await axios.get('https://api.pexels.com/v1/videos/search',{
        params:{query,per_page},
        headers:{Authorization:PIXELS_KEYS}
    })
   return res.data.videos;

}