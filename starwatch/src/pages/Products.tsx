
import Banner from '../components/Banner'
import ProductCards from '../components/ProductCards'

function Products() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row bg-gray-200 h-full font-work-sans ">
      <div className='p-6 w-full'>
       <h1 className='font-semibold text-2xl ml-1'>Product</h1> 
         <aside>
            <Banner />
         </aside>
         <ProductCards />
        </div>
    </div>
  )
}

export default Products