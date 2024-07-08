import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5k', uv: 20 }, 
  { name: '10k', uv: 80 }, 
  { name: '15k', uv: 40 }, 
  { name: '20k', uv: 90 }, 
  { name: '25k', uv: 30 }, 
  { name: '30k', uv: 100 }, 
  { name: '35k', uv: 50 }, 
  { name: '40k', uv: 70 }, 
  { name: '45k', uv: 40 }, 
  { name: '50k', uv: 90 }, 
  { name: '55k', uv: 60 }, 
  { name: '60k', uv: 20 }
];

const SalesChart = () => {
  return (
    <div className='mt-2 py-3'>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#0000FF" fill="rgba(54, 162, 235, 0.2)" dot={{ stroke: '#0000FF', strokeWidth: 2, fill: '#FFFFFF', r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
