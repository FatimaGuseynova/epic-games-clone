import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { ProductsGet } from "../../../api/ProductsGet";

function UpcomingWishlisted() {
      const [products, setProducts] = useState([]);
      useEffect(() => {
          const getProducts = async () => {
              try {
                  let page = 1;
                  let allProducts = [];
                  while (page <= 2) {
                      const res = await ProductsGet(page);
                      if (!res?.data) {
                          break;

                    }
                    allProducts = [...allProducts, ...res.data];
                    page++;
                }
                const expensiveGames = [...allProducts]
                    .filter(item => Number(item.price) > 0)
                      .sort((a, b) => Number(b.price) - Number(a.price))
                      .slice(0, 5);
                setProducts(expensiveGames);
            } catch (error) {
                  console.log(error);

            }
        };
        getProducts();
    }, []);

    return (
        <div className="bg-[#121216] py-8 pt-0">

            <div className="min-[1100px]:w-[90%] w-[93%] mx-auto">

                <div className="flex items-center justify-between mb-7">

                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white text-[21px] font-bold group"
                    >
                        Upcoming Wishlisted

                        <IoIosArrowForward className="duration-200 group-hover:translate-x-1" />
                    </Link>

                </div>

                <div className="grid grid-cols-1 gap-6">

                    {products.map(item => (

                        <Link
                            to="/detail"
                            state={{ product: item }}
                            key={item.id}
                            className="flex items-center gap-4 min-w-0 p-3 rounded-[8px] hover:bg-[#202024] duration-200"
                        >

                            <img
                                src={item.coverImage?.url}
                                alt={item.name}
                                className="w-[60px] h-[90px] rounded-[5px] object-cover shrink-0"
                            />

                            <div className="min-w-0">

                                <p className="text-white font-bold truncate">
                                    {item.name}
                                </p>

                                <p className="text-[#a0a0a0] text-[15px] mt-2">
                                    Added {new Date(item.createdAt).toLocaleDateString("en-US", {
                                        month: "2-digit",
                                        day: "2-digit",
                                        year: "2-digit"
                                    })}
                                </p>

                                <p className="text-white text-[14px] mt-2">
                                    ${Number(item.price).toFixed(2)}
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default UpcomingWishlisted;