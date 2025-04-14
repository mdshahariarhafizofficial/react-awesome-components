import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const SellChart = () => {
    const carSalesData = [
        { month: "January", Toyota: 120, Honda: 250, Ford: 80, BMW: 400, Tesla: 600 },
        { month: "February", Toyota: 130, Honda: 110, Ford: 70, BMW: 225, Tesla: 60 },
        { month: "March", Toyota: 240, Honda: 120, Ford: 90, BMW: 450, Tesla: 180 },
        { month: "April", Toyota: 50, Honda: 15, Ford: 285, BMW: 75, Tesla: 395 },
        { month: "May", Toyota: 160, Honda: 135, Ford: 100, BMW: 80, Tesla: 110 },
        { month: "June", Toyota: 170, Honda: 200, Ford: 110, BMW: 85, Tesla: 120 },
        { month: "July", Toyota: 280, Honda: 155, Ford: 520, BMW: 390, Tesla: 430 },
        { month: "August", Toyota: 190, Honda: 360, Ford: 130, BMW: 95, Tesla: 140 },
        { month: "September", Toyota: 200, Honda: 170, Ford: 140, BMW: 100, Tesla: 150 },
        { month: "October", Toyota: 210, Honda: 180, Ford: 50, BMW: 105, Tesla: 160 },
        { month: "November", Toyota: 220, Honda: 190, Ford: 160, BMW: 110, Tesla: 570 },
        { month: "December", Toyota: 600, Honda: 450, Ford: 0, BMW: 550, Tesla: 180 }
      ];      

  return (
    <div>
        <h2 className='text-5xl font-bold text-red-600 text-center my-6'>Car Sales Data</h2>
        <div className="my-8 flex gap-6 items-center justify-center">
            <h2 className="text-red-600 font-bold ">Toyota</h2>
            <h2 className="text-blue-600 font-bold ">Honda</h2>
            <h2 className="text-green-600 font-bold ">Ford</h2>
            <h2 className="text-yellow-500 font-bold ">BMW</h2>
            <h2 className="text-purple-600 font-bold ">Tesla</h2>
        </div>
        <div className="flex justify-center">
            <LineChart width={1500} height={600} data={carSalesData}>
                <Line type="monotone" strokeWidth={3} dataKey="Toyota" stroke="red" />
                <Line type="monotone" strokeWidth={3} dataKey="Honda" stroke="blue" />
                <Line type="monotone" strokeWidth={3} dataKey="Ford" stroke="green" />
                <Line type="monotone" strokeWidth={3} dataKey="BMW" stroke="yellow" />
                <Line type="monotone" strokeWidth={3} dataKey="Tesla" stroke="purple" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    </div>
  );
};

export default SellChart;
