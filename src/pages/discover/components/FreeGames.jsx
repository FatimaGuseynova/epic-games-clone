import React, { useEffect, useState } from 'react'

import { SlPresent } from "react-icons/sl";
import { Link } from 'react-router';
import { ProductsGet } from "../../../api/ProductsGet";

function FreeGames() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const responsive = async () => {
            try {
                let page = 1
                let allProducts = []

                while (true) {
                    const res = await ProductsGet(page)

                    if (!res?.data || res.data.length === 0) {
                        break
                    }

                    allProducts = [...allProducts, ...res.data]
                    page++
                }

                const freeGames = allProducts.filter(item => item.price === 0)

                setProducts(freeGames)
            } catch (error) {
                console.log(error)
            }
        }

        responsive()
    }, [])

    console.log(products)

    return (
        <div className='bg-[#121216]'>
            <div className="bg-[#202024] rounded-[14px] pb-5">
                <div className="min-[1100px]:w-[77%] w-[93%] mx-auto">
                    <div className='flex py-5 items-center justify-between'>
                        <h2 className='font-semibold text-[23px] flex items-center gap-2'>
                            <SlPresent /> Free Games
                        </h2>

                        <Link
                            className="bg-transparent px-4 py-3 text-[15px] font-semibold rounded-[8px] duration-150 border-1 border-[#5e5e65] hover:border-white hover:bg-[#626269]"
                            to="/browse"
                        >
                            View More
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 min-[550px]:grid-cols-2 gap-5'>
                        {products.map((item, index) => (
                            <Link
                                key={index}
                                to="/detail"
                                state={{ product: item }}
                                className='min-w-0'
                            >
                                <div
                                    className='rounded-[6px] shrink-0 flex items-end text-center w-full h-[200px] max-[790px]:h-[200px] bg-center bg-cover flex-wrap aspect-[20/9]'
                                    style={{
                                        backgroundImage: `url(${item?.productLogo?.url})`
                                    }}
                                >
                                    <div className='w-full rounded-b-[6px] py-1 h-fit bg-[#26BBFF]'>
                                        <h5 className='text-[15px] font-semibold'>
                                            FREE NOW
                                        </h5>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <h4 className='text-[19px] py-3 font-semibold'>
                                        {item?.name}
                                    </h4>

                                    <h5 className='items-center text-[#b6b6b6] gap-2'>
                                        Free Now - Sep 03 at 07:00 PM
                                    </h5>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeGames