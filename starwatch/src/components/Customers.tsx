import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'New Customers', value: 34249 },
    { name: 'Repeated', value: 1420 },
];
const COLORS = ['#4F46E5', '#C7D2FE'];

const Customers: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6 overflow-x-auto">
            <div className="text-gray-900 text-lg font-medium mb-4">
                <h1 className="text-center">Customers</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    
                </ResponsiveContainer>
               <div className='flex justify-around'>
               <h2 className='flex justify-center'>34,249</h2>
               <h2 className='flex justify-center'>1420</h2>
               </div>
                <div className="mt-4 flex justify-center space-x-8">
                    <div className="flex items-center space-x-2">            
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>New Customers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                        <span>Repeated</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;
