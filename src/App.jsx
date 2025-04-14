import { Suspense } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import PricingPlan from './Components/Pricing/PricingPlan'

function App() {

  const pricingDataFetch = fetch('/public/pricingTable.json')
  .then(res => res.json())

  return (
    <>
       <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
       </div>
        <Hero></Hero>
        <div className='w-11/12 mx-auto'>
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <PricingPlan 
                  pricingDataFetch = {pricingDataFetch}
                ></PricingPlan>
            </Suspense>
       </div>
    </>
  )
}

export default App
