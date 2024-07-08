import React, { useState } from 'react';
import { FiAlignLeft, FiGrid } from "react-icons/fi";
import { FaHeart, FaFileAlt, FaCreditCard, FaUser, FaPowerOff, FaBox } from "react-icons/fa";
import { IoClipboardSharp, IoSettings } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { HiUsers } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { BsChatDotsFill } from "react-icons/bs";
import { BsFillBoxFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { BsGridFill } from "react-icons/bs";

type SidebarItem = 'Dashboard' | 'Box' | 'Heart' | 'Chat' | 'Paper' | 'Shop' | 'File' | 'Calendar' | 'Clipboard' | 'Users' | 'Credit' | 'Chart' | 'User' | 'Settings';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<SidebarItem>('Dashboard');
  const navigate = useNavigate()

  const handleItemClick = (itemName: SidebarItem) => {
    setActiveItem(itemName);
    if(itemName ==='Box'){
       navigate('/products')
    }
    if(itemName=='Chat'){
      navigate('/chat')
    }
    if(itemName=='Dashboard'){
      navigate('/')
    }
    console.log(itemName);
  };


  return (
    <div className="flex bg-gray-100 text-gray-900">
      <aside className="flex h-full w-20 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
          <FiAlignLeft className="h-5 w-6 stroke-current text-gray-500" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-5">
          <div
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Dashboard' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Dashboard' && 'hidden'}`}></div>
            <BsGridFill className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Dashboard' ? 'text-blue-500' : 'text-gray-500'}`} />
          </div>
          <div
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Box' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Box')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Box' && 'hidden'}`}></div>
            <BsFillBoxFill className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Box' ? 'text-blue-500' : 'text-gray-500'}`} />
          </div>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Heart' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Heart')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Heart' && 'hidden'}`}></div>
            <FaHeart className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Heart' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <div
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Chat' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Chat')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Chat' && 'hidden'}`}></div>
            <BsChatDotsFill className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Chat' ? 'text-blue-500' : 'text-gray-500'}`} />
          </div>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Paper' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Paper')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Paper' && 'hidden'}`}></div>
            <IoIosPaper className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Paper' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Shop' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Shop')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Shop' && 'hidden'}`}></div>
            <FaBox className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Shop' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'File' && 'text-blue-500'}`}
            onClick={() => handleItemClick('File')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'File' && 'hidden'}`}></div>
            <FaFileAlt className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'File' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Calendar' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Calendar')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Calendar' && 'hidden'}`}></div>
            <SlCalender className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Calendar' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Clipboard' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Clipboard')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Clipboard' && 'hidden'}`}></div>
            <IoClipboardSharp className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Clipboard' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Users' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Users')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Users' && 'hidden'}`}></div>
            <HiUsers className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Users' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Credit' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Credit')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Credit' && 'hidden'}`}></div>
            <FaCreditCard className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Credit' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Chart' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Chart')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Chart' && 'hidden'}`}></div>
            <RiPieChartFill className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Chart' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'User' && 'text-blue-500'}`}
            onClick={() => handleItemClick('User')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'User' && 'hidden'}`}></div>
            <FaUser className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'User' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
          <a
            href="#"
            className={`group relative rounded-xl p-2 text-gray-500 hover:bg-gray-50 ${activeItem === 'Settings' && 'text-blue-500'}`}
            onClick={() => handleItemClick('Settings')}
          >
            <div className={`h-4 w-1 bg-blue-500 absolute left-0 ${activeItem !== 'Settings' && 'hidden'}`}></div>
            <IoSettings className={`h-4 w-6 stroke-current ml-1 ${activeItem === 'Settings' ? 'text-blue-500' : 'text-gray-500'}`} />
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-5">
          <button title='button' className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
          </button>
          <button title='button' className="">
            <a href="#" className="">
              <FaPowerOff className="h-4 w-6 stroke-current text-gray-500" />
            </a>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
