import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header></Header>
      <Home></Home>
      <Shop></Shop>
    </div>
  )
}

export default App
