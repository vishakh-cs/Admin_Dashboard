// Dashboard.jsx

import { HiUsers } from "react-icons/hi2";
import { IoTrendingUp } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { FaHistory } from "react-icons/fa";
import { IoMdTrendingDown } from "react-icons/io";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DealsDetails from '../components/DealsDetails';
import Revenu from "../components/Revenu";
import Customers from "../components/Customers";
import Featured_Product from "../components/Featured_Product";
import Sales_Analytics from "../components/Sales_Analytics";
import SalesChart from "../components/SalesChart";

const data = [
  { name: '5k', uv: 20, pv: 2400, amt: 2400 },
  { name: '10k', uv: 80, pv: 1398, amt: 2210 },
  { name: '15k', uv: 40, pv: 9800, amt: 2290 },
  { name: '20k', uv: 90, pv: 3908, amt: 2000 },
  { name: '25k', uv: 30, pv: 4800, amt: 2181 },
  { name: '30k', uv: 100, pv: 3800, amt: 2500 },
  { name: '35k', uv: 50, pv: 4300, amt: 2100 },
  { name: '40k', uv: 70, pv: 3400, amt: 2300 },
  { name: '45k', uv: 40, pv: 2300, amt: 2400 },
  { name: '50k', uv: 90, pv: 1200, amt: 2500 },
  { name: '55k', uv: 60, pv: 1400, amt: 2600 },
  { name: '60k', uv: 20, pv: 1500, amt: 2700 },
];
const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-100vh">
      <div className='p-6 bg-gray-200 w-full'>
        <h1 className='text-gray-900 font-semibold font-work-sans text-2xl ml-2 mb-2'>Dashboard</h1>
        {/* Boxes */}
        <div className='flex flex-wrap justify-between font-work-sans'>
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/5 h-36 p-4 m-2 relative transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-gray-900 text font-normal">Total Users</h2>
            <div className='bg-purple-300 w-12 h-12 rounded-2xl absolute right-7 flex items-center justify-center'>
              <HiUsers size={20} className='text-blue-900/50' />
            </div>
            <p className="text-gray-900 font-bold text-2xl">40,689</p>
            <span className='flex mt-6 text-green-500 gap-2'>
              <IoTrendingUp size={25} className='text-green-500' />
              8.5% <span className='text-gray-600 font-normal text-sm'>up from yesterday</span>
            </span>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/5 h-36 p-4 m-2 relative transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-gray-900 text font-normal">Total Order</h2>
            <div className='bg-yellow-200 w-12 h-12 rounded-2xl absolute right-7 flex items-center justify-center'>
              <BsBoxFill size={20} className='text-yellow-400' />
            </div>
            <p className="text-gray-900 font-bold text-2xl">10,293</p>
            <span className='flex mt-6 text-green-500 gap-2'>
              <IoTrendingUp size={25} className='text-green-500' />
              1.3% <span className='text-gray-600 font-normal text-sm'>up from last week</span>
            </span>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/5 h-36 p-4 m-2 relative transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-gray-900 text font-normal">Total Sales</h2>
            <div className='bg-green-300 w-12 h-12 rounded-2xl absolute right-7 flex items-center justify-center'>
              <GoGraph size={20} className='text-green-700' />
            </div>
            <p className="text-gray-900 font-bold text-2xl">75,324</p>
            <span className='flex mt-6 text-red-500 gap-2'>
              <IoMdTrendingDown size={25} className='text-red-500' />
              4.3% <span className='text-gray-600 font-normal text-sm'>down from yesterday</span>
            </span>
          </div>
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/5 h-36 p-4 m-2 relative transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h2 className="text-gray-900 text font-normal">Total Pending</h2>
            <div className='bg-red-300 w-12 h-12 rounded-2xl absolute right-7 flex items-center justify-center'>
              <FaHistory size={20} className='text-red-800' />
            </div>
            <p className="text-gray-900 font-bold text-2xl">12,345</p>
            <span className='flex mt-6 text-green-500 gap-2'>
              <IoTrendingUp size={25} className='text-green-500' />
              1.8% <span className='text-gray-600 font-normal text-sm'>up from last week</span>
            </span>
          </div>
        </div>

        {/* Axis Chart */}
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6">
          <h2 className="text-gray-900 text-lg font-medium mb-4">Sales Chart</h2>
         <SalesChart />
        </div>
        <DealsDetails />
        <Revenu />
        <div className="flex flex-col sm:flex-row lg:flex-row gap-5 mt-6">
         <Customers />
         <Featured_Product />
         <Sales_Analytics />
         
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
