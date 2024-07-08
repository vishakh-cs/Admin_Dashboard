import React from 'react';
import InboxSidebar from '../components/InboxSidebar';
import MailListing from '../components/MailListing';

function Inbox() {
    return (
        <div className='w-full font-work-sans bg-gray-200 h-full'>
            <div className='p-6'>
                <h1 className='font-semibold text-2xl'>Inbox</h1>
                <div className='flex gap-6'>
                    <div className=' w-full md:w-1/5 mt-5'>
                        <InboxSidebar />
                    </div>
                    <MailListing />
                </div>
            </div>
        </div>
    );
}

export default Inbox;
