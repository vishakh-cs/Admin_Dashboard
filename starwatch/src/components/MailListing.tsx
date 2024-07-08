import React, { useState } from 'react';
import { FaSearch, FaRegSquare, FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';
import { HiOutlineFolderDownload } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const MailListing = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const hideScrollbarStyle = {
        WebkitScrollbar: {
            display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    };

    const mailData = [
        {
            sender: 'Juliu Jalal',
            label: 'Primary',
            subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            time: '8:38 AM',
            isStarred: false,
        },
        {
            sender: 'Minerva Barnett',
            label: 'Work',
            subject: 'Get Best Advertiser In Your Side Pocket',
            time: '8:13 AM',
            isStarred: false,
        },
        {
            sender: 'Peter Lewis',
            label: 'Friends',
            subject: 'Vacation Home Rental Success',
            time: '7:52 PM',
            isStarred: false,
        },
        {
            sender: 'Anthony Briggs',
            subject: 'Free Classifieds Using Them To Promote Your Stuff Online',
            time: '7:52 PM',
            isStarred: true,
        },
        {
            sender: 'Clifford Morgan',
            label: 'Social',
            subject: 'Enhance Your Brand Potential With Giant Advertising Blimps',
            time: '4:13 PM',
            isStarred: false,
        },
        {
            sender: 'Cecilia Webster',
            label: 'Friends',
            subject: 'Always Look On The Bright Side Of Life',
            time: '3:52 PM',
            isStarred: false,
        },
        {
            sender: 'Harvey Manning',
            subject: 'Curling Irons Are As Individual As The Women Who Use Them',
            time: '2:30 PM',
            isStarred: true,
        },
        {
            sender: 'Willie Blake',
            label: 'Primary',
            subject: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            time: '8:38 AM',
            isStarred: false,
        },
        {
            sender: 'Fanny Weaver',
            subject: 'Free Classifieds Using Them To Promote Your Stuff Online',
            time: '7:52 PM',
            isStarred: true,
        },
        {
            sender: 'Olga Hogan',
            label: 'Social',
            subject: 'Enhance Your Brand Potential With Giant Advertising Blimps',
            time: '4:13 PM',
            isStarred: false,
        },
        {
            sender: 'Lora Houston',
            label: 'Friends',
            subject: 'Vacation Home Rental Success',
            time: '7:52 PM',
            isStarred: false,
        },
    ];

    const labelStyles = {
        Primary: 'bg-green-200/80 text-green-600',
        Work: 'bg-orange-200/80 text-orange-600',
        Friends: 'bg-purple-200/80 text-purple-600',
        Social: 'bg-blue-300/60 text-blue-400',
    };


    const filteredMails = mailData.filter(
        (mail) =>
            mail.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-full md:w-3/4'>
            <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6 overflow-hidden">
                <div className="text-gray-900 text-lg font-medium mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search mail"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-none bg-gray-100 rounded-2xl pl-10 pr-4 py-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex bg-gray-100 rounded-full px-4 py-2 gap-4 items-center">
                            <HiOutlineFolderDownload size={18} className="text-gray-600 cursor-pointer hover:text-blue-500" />
                            <IoIosInformationCircle size={18} className="text-gray-600 cursor-pointer hover:text-blue-500" />
                            <RiDeleteBin7Fill size={18} className="text-gray-600 cursor-pointer hover:text-blue-500" />
                        </div>
                    </div>
                    <div className="h-[500px] overflow-y-auto" style={hideScrollbarStyle}>
                        {filteredMails.map((mail, index) => (
                            <div key={index} className="p-4 border-b border-gray-200 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <FaRegSquare size={20} className="text-gray-400" />
                                    {mail.isStarred ? (
                                        <FaStar size={25} className="text-yellow-500" />
                                    ) : (
                                        <CiStar size={25} className="text-gray-400" />
                                    )}
                                    <div className="ml-4 flex items-center space-x-2">
                                        <span className="font-semibold">{mail.sender}</span>
                                        <div className={`w-16 flex justify-center items-center py-1 h-6 text-xs rounded-lg  ${labelStyles[mail.label]}`}>
                                            {mail.label}
                                        </div>
                                        <p className="text-sm text-gray-600 truncate">{mail.subject}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">{mail.time}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <h3 className="mt-4 text-gray-600 font-semibold ml-3">Showing 1-{filteredMails.length}/1253</h3>
                <div className='flex mt-5 text-gray-500 mr-2 w-14'>
                    <FaChevronLeft size={20} className='bg-gray-100 w-5 border-2'/>
                    <FaChevronRight size={20} className='bg-gray-100 w-5 border-2'/>
                </div>
            </div>

        </div>
    );
};

export default MailListing;
