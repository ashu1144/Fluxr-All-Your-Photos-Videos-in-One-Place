import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ["photos" , "videos"]
    const dispatch = useDispatch();

    const activeTab = useSelector((state)=>state.search.activeTab)
    
  return (
    <div className='flex justify-center mt-5 z-50 items-center gap-2 px-5 justify-around'>
      <div className="relative h-[2px] w-[33%] overflow-hidden bg-gray-400/40 before:content-[''] before:absolute before:-right-16 before:top-0 before:h-full before:w-80 before:bg-[radial-gradient(circle,red_0%,transparent_70%)]">
</div>
        <div className='bg-gray-500 rounded-full overflow-hidden flex items-center h-16 max-md:w-full '>
          {tabs.map((el,idx)=>(
            <button
              key={idx}
              onClick={()=>dispatch(setActiveTabs(el))}
              className={`px-4 py-2 h-full w-full rounded-full active:scale-95 uppercase text-sm sm:text-base ${activeTab==el?"bg-[#ff3366] text-white":"text-white/80"}`}>
                {el}
            </button>
          ))}
        </div>
         <div className="relative h-[2px] w-[33%] overflow-hidden bg-gray-400/40 before:content-[''] before:absolute before:-left-20 before:top-0 before:h-full before:w-80 before:bg-[radial-gradient(circle,red_0%,transparent_70%)]">
</div>
    </div>
  )
}

export default Tabs