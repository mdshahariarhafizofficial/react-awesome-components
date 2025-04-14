import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
       <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
       </div>
        <Hero></Hero> 
    </>
  )
}

export default App
