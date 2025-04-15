import { Suspense } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import PricingPlan from './Components/Pricing/PricingPlan'
import SellChart from './Components/SellingChart/SellChart'

function App() {

  const pricingDataFetch = fetch('pricingTable.json')
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
            <div className='my-20'>
              <SellChart></SellChart>
            </div>
       </div>
    </>
  )
}

export default App
