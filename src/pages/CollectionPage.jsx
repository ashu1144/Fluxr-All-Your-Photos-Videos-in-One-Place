import React from 'react'
import CollectionsGrid from '../components/CollectionsGrid'
import { Link } from 'react-router-dom'
import CollectionBar from '../components/CollectionBar'
import RedPinkBlur from '../components/RedPinkBlur'
import Blur from '../components/Blur'

const CollectionPage = () => {
  return (
    <div className='min-h-screen text-white w-full bg-[#08080f] relative overflow-hidden'>
      <CollectionBar></CollectionBar>
      <RedPinkBlur></RedPinkBlur>
      <Blur></Blur>
      <CollectionsGrid></CollectionsGrid>
    </div>
  )
}

export default CollectionPage