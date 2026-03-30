import React from 'react'
import { deleteItem } from '../redux/features/collectionSlice'
import { useDispatch } from 'react-redux'

const CollecrionCard = ({item}) => {
    const dispatch = useDispatch();

    return(

   <div className="bg-white rounded overflow-hidden relative group transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,51,102,1)] group ">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {/* PHOTO */}
          {item.type === "photo" && (
            <img
              className="w-full h-40 sm:h-48 md:h-56 object-cover"
              src={item.thumbnail}
              alt={item.title || "image"}
            />
          )}
  
          {/* VIDEO */}
          {item.type === "video" && (
            <video
              className="w-full h-40 sm:h-48 md:h-56 object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </a>
         <div className="bg-zinc-900 flex px-2 items-center justify-between py-2">
              <p className="text-white text-sm truncate">
                {item.title || "Untitled"}
              </p>
              <button onClick={()=>dispatch(deleteItem(item))} className="bg-red-500 text-sm px-3 py-1 rounded capitalize z-10 cursor-pointer">
                Remove
              </button>
          </div> 
      </div>)
}

export default CollecrionCard