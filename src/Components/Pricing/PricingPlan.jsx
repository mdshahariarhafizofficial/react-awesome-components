import React, { use } from 'react';
import PricingTable from './PricingTable';

const PricingPlan = ({pricingDataFetch}) => {
    const pricingData = use(pricingDataFetch);
    
    return (
        <div className='py-20'>
            
            <h2 className='text-6xl font-bold text-red-600 text-center'>Pricing Plan</h2>

            <div className='grid grid-cols-3 gap-6 my-6'>
                {
                    pricingData.map(data => <PricingTable
                        key={data.id} 
                        data = {data}
                    ></PricingTable>)
                }
            </div>
        </div>
    );
};

export default PricingPlan;<h2>Pricing Plan</h2>