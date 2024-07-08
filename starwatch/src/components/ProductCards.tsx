import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";

// Star Component
function Star({ filled }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? "gold" : "gray"} viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5 21z" />
        </svg>
    );
}

function ProductCards() {
    const products = [
        { id: 1, name: 'Apple Watch Series 4', price: '$120.00', img: "https://www.bhphotovideo.com/images/images2500x2500/apple_mlch2ll_a_watch_sport_smartwatch_38mm_1187204.jpg", rating: 4.5 },
        { id: 2, name: 'Apple Watch Series 4', price: '$45.30', img: "https://www.bhphotovideo.com/images/images2500x2500/apple_mnnm2ll_a_apple_watch_series_1_1280591.jpg", rating: 3.5 },
        { id: 3, name: 'Apple Watch Series 3', price: '$15.30', img: "https://th.bing.com/th/id/OIP.0wAiC37D1Wm7CrZAodQuzAHaHa?w=640&h=640&rs=1&pid=ImgDetMain", rating: 4.0 },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 py-4">
            {products.map(product => (
                <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between relative">
                    <CiCircleChevLeft size={30} className="absolute top-1/3 transform -translate-y-1/2 left-2 text-gray-600/65" />
                    <CiCircleChevRight size={30} className="absolute top-1/3 transform -translate-y-1/2 right-2 text-gray-600/65" />
                    <img src={product.img} alt={product.name} className="rounded-lg mb-3 h-[300px] object-contain" />
                    <div className="flex justify-between items-center">
                        <h2 className="text-md font-semibold mb-1">{product.name}</h2>
                        <span className="bg-gray-100 w-8 h-8 rounded-2xl flex justify-center items-center">
                            <MdFavoriteBorder size={20} />
                        </span>
                    </div>


                    <p className="text-gray-500">{product.price}</p>
                    <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} filled={product.rating >= i + 1} />
                        ))}
                    </div>
                    <div>
                        <button className='bg-blue-500/20 rounded-xl w-36 h-9 font-semibold text-sm'>Edit Product</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCards;
