import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
function App() {

  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Home/>
      <Outlet/>
    </div>
  )
}

export default App
