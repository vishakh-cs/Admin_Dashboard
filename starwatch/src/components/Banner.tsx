import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Banner() {
  return (
    <div className="relative">
      <FaChevronCircleLeft size={35} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-100 h-8 w-8" />
      <FaChevronCircleRight size={35} color="white" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-100 h-8 w-8" />
      <div className='bg-blue-600/95 w-full h-[200px] lg:h-[300px] rounded-xl mt-5 text-gray-50'>
        <div className="flex flex-col w-full sm:w-1/2 md:ml-24 ml-10 justify-start items-start h-full text-pretty px-5 py-5">
          <h3 className="text-sm sm:text-base lg:text-xl font-semibold text-gray-200 mb-2">September 12-22</h3>
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2">Enjoy Free Home</h1>
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Delivery This Summer</h1>
          <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-200">Designer Dress - Pick from trendy Designer Dress</h4>
          <button className="bg-orange-500 w-1/4 mt-5 rounded-xl h-10">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Banner;
