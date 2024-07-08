import React from 'react';

function DealsDetails() {
    const dealsData = [
        {
            productName: "Apple Watch",
            location: "6096 Marjolane Landing",
            dateTime: "2024-07-06T12:00:00Z",
            piece: 427,
            amount: "$34,295",
            status: "Delivered",
            imageUrl: "https://www.bhphotovideo.com/images/images2500x2500/apple_mlch2ll_a_watch_sport_smartwatch_38mm_1187204.jpg"
        },
        {
            productName: "Apple iphone 14",
            location: "6096 Marjolane Landing",
            dateTime: "2024-07-06T13:30:00Z",
            piece: 1,
            amount: "$2500",
            status: "Delivered",
            imageUrl: "https://m.xcite.com/media/catalog/product//i/p/iphone_14_pro_-_deep_purple_1_1_1.jpg"
        }
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6 overflow-x-auto">
            <div className="text-gray-900 text-lg font-medium mb-4">
                Deals Details
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200 rounded-md">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date-Time</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Piece</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {dealsData.map((deal, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src={deal.imageUrl} alt={deal.productName} className="h-8 w-8 rounded-full mr-2" />
                                        <span>{deal.productName}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{deal.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{new Date(deal.dateTime).toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{deal.piece}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{deal.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className='px-5 py-2 bg-green-600 text-white w-28 h-11 inline-block rounded-full'>{deal.status}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DealsDetails;
