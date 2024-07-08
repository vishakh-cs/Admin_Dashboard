import React from 'react';
import { CiCircleChevRight, CiCircleChevLeft } from 'react-icons/ci';

function Featured_Product() {
    return (
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6 overflow-x-auto">
            <div className="text-gray-900 text-lg font-medium mb-4">
                <div>Featured Product</div>
            </div>
            <div className='relative flex justify-center items-center'>
                <CiCircleChevLeft size={30} className='absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900' />
                <img className='w-2/3 max-w-lg' src="https://cdn.zecheriah.com/img/shop/powerlocus-p3-headphones.jpg" alt="Beats Headphone 2024" />
                <CiCircleChevRight size={30} className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-900' />
            </div>
            <div className='flex flex-col justify-center items-center mt-16 font-medium'>
                <h3>Beats Headphone 2024</h3>
                <h3 className='text-blue-500'>$89.00</h3>
            </div>
        </div>
    );
}

export default Featured_Product;
