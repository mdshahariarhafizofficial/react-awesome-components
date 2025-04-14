import React from 'react';
import { ArrowBigRightDash } from 'lucide-react';

const PricingTable = ({data}) => {
    const {planName, pricePerDay, pricePerMonth, features} = data;
    return (
        <div className='bg-black rounded-xl p-5 relative'>
            {
                planName === 'Standard'&& <span className='absolute top-3 right-0 bg-yellow-300 p-3 rounded-sm font-bold'>Recommended</span>
            }
            <h2 className='text-5xl font-bold text-red-600 text-center'>{planName}</h2>
            <div className='flex justify-between items-center my-8 text-3xl font-semibold text-white'>
                <h3>Per-Day: $ {pricePerDay}</h3>
                <h3>Per-Month: $ {pricePerMonth}</h3>
            </div>
            <div>
                <h2 className='text-4xl font-semibold text-red-600'>Features:</h2>
                    {
                        features.map((feature, i) => <p key={i} className='text-white font-lg flex items-center gap-2 my-3'> <ArrowBigRightDash color = {'red'} /> {feature}</p>)
                    }
            </div>
            <div className='text-center'>
                <button className="btn w-full bg-red-600 border-0 outline-0 text-white px-8 text-xl my-5">Select Plan</button>
            </div>
        </div>
    );
};

export default PricingTable;<h2>Test</h2>