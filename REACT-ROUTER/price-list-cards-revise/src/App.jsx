import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
        <h1 className='text-7xl text-purple-600'>Hello From Tailwind</h1>
        <PriceList></PriceList>
        <PhoneBar></PhoneBar>
        
    </>
  )
}

export default App
