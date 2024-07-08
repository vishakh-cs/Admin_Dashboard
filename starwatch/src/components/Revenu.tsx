import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '5k', Sales: 30, Profit: 20 },
    { name: '10k', Sales: 50, Profit: 30 },
    { name: '15k', Sales: 45, Profit: 35 },
    { name: '20k', Sales: 60, Profit: 50 },
    { name: '25k', Sales: 70, Profit: 60 },
    { name: '30k', Sales: 80, Profit: 40 },
    { name: '35k', Sales: 60, Profit: 30 },
    { name: '40k', Sales: 50, Profit: 40 },
    { name: '45k', Sales: 70, Profit: 50 },
    { name: '50k', Sales: 90, Profit: 60 },
    { name: '55k', Sales: 100, Profit: 70 },
    { name: '60k', Sales: 80, Profit: 60 },
];

const Revenue: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6">
            <div className="text-gray-900 text-lg font-medium mb-4">
                <h2 className='mb-6'>Revenue</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                        <Area type="monotone" dataKey="Sales" stackId="1" stroke="#e3b9ff" fill="#8884d8" />
                        <Area type="monotone" dataKey="Profit" stackId="1" stroke="#f9978a" fill="#ff7300" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Revenue;
