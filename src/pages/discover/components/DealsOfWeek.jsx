import React, { useEffect, useState } from 'react'
import { ProductsGet } from "../../../api/ProductsGet";
import savemore from '../../../images2/savemore.avif'
import { Link } from 'react-router';

function DealsOfWeek() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const responsive = async () => {
            const res = await ProductsGet()
            setProducts(res.data.filter(item => item?.events[0]?.name === "Deals of the week"))
        }
        responsive()
    }, [])
    return (
        <div className="bg-[#121216] py-23">
            <div className="min-[1100px]:w-[77%] w-[93%] mx-auto">
                <div className='flex gap-3'>
                    {products.map((item, index) => (
                        <Link key={index} to="/detail" state={{ product: item }} className='w-full'>
                            <div className=' shrink-0 flex items-end text-center w-full h-[200px] bg-center bg-cover ' style={{ backgroundImage: `url(${item.productLogo.url}` }} key={index}>
                                <div className='w-full rounded-b-[6px] py-1 h-fit bg-gradient-to-r from-[#160FF3] via-[#4C08F9] to-[#7A03FD]'>
                                    <h5 className='text-[13px] font-semibold'>{item.events[0].name}</h5>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-[19px] py-3 font-semibold'>{item.name}</h4>
                                <h5 className={`${item?.discount > 0 ? "flex" : "hidden"} items-center gap-2`}>
                                    <div className='bg-[#26BAFE] px-1  py-0.5 text-black text-[14px] rounded-2xl'>
                                        {item?.discount > 0 && `-${Math.round(100 - ((item.discount / item.price) * 100))}%`}
                                    </div>
                                    <div className='text-[15px] line-through text-[#ACA294]'>
                                        ${item.price}*
                                    </div>
                                    <div className='text-white text-[15px]'>
                                        ${item.discount}
                                    </div>
                                </h5>
                            </div>
                        </Link>
                    ))}
                    <div className='w-full'>
                        <img className='w-full h-[200px]' src={savemore} alt="discounts" />
                        <h4 className='text-[19px] py-3 font-semibold'>Check out all the
                            deals for this week.</h4>
                        <Link className="bg-[#343437] px-4 py-3 text-[15px] font-semibold rounded-[8px] duration-150 hover:bg-[#626269]" to="/browse">Browse</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsOfWeek