import { FaPlus } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { CiWarning } from "react-icons/ci";
import { BsChatText } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

interface InboxSidebarProps {}

const InboxSidebar: React.FC<InboxSidebarProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('inbox'); 

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  const isActive = (item: string) => {
    return activeItem === item;
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">
          Compose
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-gray-600 font-semibold mb-2">My Email</h2>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("inbox") ? "bg-blue-100 h-10 rounded-md  text-blue-700" : ""
          }`}
          onClick={() => handleClick("inbox")}
        >
          <IoMailOutline className={`mt-1 ${isActive("inbox") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("inbox") ? "text-blue-700" : "text-gray-700"}`}>
            Inbox
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("inbox") ? "text-blue-700" : ""}`}>
            1253
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("starred") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("starred")}
        >
          <FaRegStar className={`mt-1 ${isActive("starred") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("starred") ? "text-blue-700" : "text-gray-700"}`}>
            Starred
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("starred") ? "text-blue-700" : ""}`}>
            245
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("sent") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("sent")}
        >
          <BsSend className={`mt-1 ${isActive("sent") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("sent") ? "text-blue-700" : "text-gray-700"}`}>
            Sent
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("sent") ? "text-blue-700" : ""}`}>
            24,532
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("draft") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("draft")}
        >
          <GoPencil className={`mt-1 ${isActive("draft") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("draft") ? "text-blue-700" : "text-gray-700"}`}>
            Draft
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("draft") ? "text-blue-700" : ""}`}>
            09
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("spam") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("spam")}
        >
          <CiWarning className={`mt-1 ${isActive("spam") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("spam") ? "text-blue-700" : "text-gray-700"}`}>
            Spam
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("spam") ? "text-blue-700" : ""}`}>
            14
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("important") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("important")}
        >
          <BsChatText className={`mt-1 ${isActive("important") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("important") ? "text-blue-700" : "text-gray-700"}`}>
            Important
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("important") ? "text-blue-700" : ""}`}>
            18
          </span>
        </div>
        <div
          className={`flex items-center mb-2 cursor-pointer ${
            isActive("bin") ? "bg-blue-100 h-10 rounded-md text-blue-700" : ""
          }`}
          onClick={() => handleClick("bin")}
        >
          <RiDeleteBin6Line className={`mt-1 ${isActive("bin") ? "text-blue-500" : ""}`} />
          <span className={`ml-1 ${isActive("bin") ? "text-blue-700" : "text-gray-700"}`}>
            Bin
          </span>
          <span className={`text-gray-500 ml-auto ${isActive("bin") ? "text-blue-700" : ""}`}>
            9
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-gray-600 font-bold mb-2">Label</h2>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-green-500 ring-1 ring-green-500"
          />
          <span className="ml-2 text-gray-700">Primary</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-blue-500 ring-1 ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Social</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-orange-500 ring-1 ring-orange-500"
          />
          <span className="ml-2 text-gray-700">Work</span>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-purple-500 ring-1 ring-purple-500"
          />
          <span className="ml-2 text-gray-700">Friends</span>
        </div>
        <button className="text-gray-500 flex gap-4 font-semibold py-2 px-4 rounded w-full">
          <FaPlus className="mt-1 text-gray-500" /> <span>Create New Label</span>
        </button>
      </div>
    </div>
  );
};

export default InboxSidebar;
