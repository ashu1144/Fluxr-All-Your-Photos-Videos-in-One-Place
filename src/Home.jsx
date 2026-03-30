import React from 'react'
import { SearchBar } from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import RedPinkBlur from './components/RedPinkBlur'
import Blur from './components/Blur'
const Home = () => {
  return (
    <div className='min-h-screen text-white w-full bg-[#08080f] relative overflow-hidden'>
      <Blur></Blur>
      <RedPinkBlur></RedPinkBlur>
      <SearchBar></SearchBar>
      <Tabs></Tabs>
      <ResultGrid></ResultGrid>
    </div>
  )
}

export default Home