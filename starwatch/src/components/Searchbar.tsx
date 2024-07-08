import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";


function Searchbar() {

    const [notificationCount,setNotificationCount] = useState(6)

  return (
    <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg">
      <div className="flex items-center">
        <IoSearch size={20} className="text-gray-400" />
        <input
          type="text"
          className="block ml-2 w-full px-2 py-1 bg-gray-100 border-none focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        <FaBell size={23} className="text-blue-600 cursor-pointer" />
        <span className="bg-red-500 rounded-full text-xs text-white flex items-center justify-center h-4 w-4 mr-2 mb-2">{notificationCount}</span>
        <div className="flex items-center">
          <img
            src="https://renzvector.com/wp-content/uploads/2022/01/a5.png"
            alt="avatar"
            className="h-10 w-10 rounded-full object-cover ml-2"
          />
          <span className="ml-2 text-gray-800 font-sans font-semibold text-sm">Moni Roy <br/> 
           <h4 className='flex justify-center font-light font-sans'>Admin</h4> 
          </span>
          <CiCircleChevDown size={23} className='ml-5 text-gray-600'/>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
