import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import CollectionPage from './pages/CollectionPage'

const App = () => {
  return (
    <Routes>
        <Route element={<Home></Home>} path='/' ></Route>
        <Route path="/collections" element={<CollectionPage></CollectionPage>}></Route>
    </Routes>
  )
}

export default App