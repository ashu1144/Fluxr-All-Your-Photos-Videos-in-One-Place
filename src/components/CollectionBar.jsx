import React from 'react'
import { Link } from 'react-router-dom'

const CollectionBar = () => {
  return (
    <div className="bg-[#08080f] border-b-2 border-zinc-500/10 z-99 relative ">
      <form
        className="flex flex-col justify-between md:flex-row items-center gap-4 md:gap-5 p-4 mx-auto w-full max-w-4xl"
      >
        <div className="min-md:w-39 w-60  overflow-hidden object-contain ">
          <img src="/logo.svg" alt="" />
        </div>

        <Link to='/'  className="active:scale-95 bg-green-500 p hover:bg-purple-600 text-white px-6 py-3 rounded-2xl w-full md:w-auto text-center flex gap-1 justify-center" >
          Home
        </Link>
   
      </form>
    </div>
  )
}

export default CollectionBar