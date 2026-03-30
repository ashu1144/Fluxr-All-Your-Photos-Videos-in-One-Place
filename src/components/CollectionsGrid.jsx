import React from 'react'
import { useSelector } from 'react-redux'
import CollecrionCard from './CollecrionCard'

const CollectionsGrid = () => {
    const results = useSelector((state)=>state.collection)
  return (
    <div className="mx-auto px-3 py-6 w-full max-w-7xl">
      {results.length==0 && <div className='text-center  w-full'>No Saved Content</div>}
      <div className="grid grid-cols-2 sm:grid-cols-2 
      md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((item, idx) => (
            <CollecrionCard item={item} key={idx}></CollecrionCard>
        ))}
      </div>
    </div>
  )
}

export default CollectionsGrid