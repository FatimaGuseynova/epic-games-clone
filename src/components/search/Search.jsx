import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { IoMdSearch, IoMdClose } from "react-icons/io"
import { ProductsGet } from "./../../api/ProductsGet"

function Search({ opened, setOpen }) {
    const [query, setQuery] = useState('')
    const [products, setProducts] = useState([])
    const [results, setResults] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const getProducts = async () => {
            try {
                let page = 1
                let allProducts = []
                let totalPages = 1
                do {
                    const response = await ProductsGet(page)
                    allProducts = [...allProducts, ...(response?.data || [])]
                    totalPages = response?.totalPages || 1
                    page++
                } while (page <= totalPages)
                setProducts(allProducts)
            } catch (error) {
                console.error("Search products error:", error)
            }
        }
        getProducts()
    }, [])

    useEffect(() => {
        const value = query.trim().toLowerCase()
        if (!value) {
            setResults([])
            return
        }
        const filtered = products.filter((product) => {
            const name = (product.name || product.title || '').toLowerCase()
            return name.includes(value)
        })
        setResults(filtered.slice(0, 4))
    }, [query, products])

    useEffect(() => {
        setOpen(false)
        setQuery('')
    }, [location.pathname, setOpen])

    const handleSearch = () => {
        const value = query.trim()
        if (value) {
            navigate('/browse')
            setOpen(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const handleResultClick = (product) => {
        navigate('/detail', { state: { product } })
        setOpen(false)
        setQuery('')
    }

    const showResults = query.trim().length > 0

    return (
        <div>
            <div className="max-[1023px]:hidden">
                <div className="relative pr-8">
                    <div className="flex items-center px-2.5 rounded-full bg-[#202024] hover:bg-[#3f3f44] transition-colors duration-200">
                        <IoMdSearch />
                        <input type="text" placeholder="Search store" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className="py-2 w-full pl-2.5 bg-transparent outline-none border-none text-[13px] text-white" />
                    </div>

                    {showResults && (
                        <div className="absolute z-50 top-full left-0 mt-3 w-[710px] rounded-2xl bg-[#202024] border border-[#414145] shadow-2xl overflow-hidden">
                            <div className="px-7 pt-6 pb-3">
                                <p className="text-[12px] font-semibold text-[#99999d]">TOP RESULTS</p>
                            </div>

                            {results.length > 0 ? (
                                <div>
                                    {results.map((product) => (
                                        <div key={product.id} onClick={() => handleResultClick(product)} className="flex items-center gap-4 px-7 py-3 cursor-pointer hover:bg-[#303034] transition-colors">
                                            <img src={product.coverImage.url} alt="" className="w-[50px] h-[50px] object-cover rounded" />
                                            <div className="flex flex-col">
                                                <span className="text-[13px] text-[#99999d]">Base Game</span>
                                                <span className="text-[16px] font-semibold text-white">{product.name}</span>
                                            </div>
                                        </div>
                                    ))}

                                    <div onClick={handleSearch} className="px-7 py-5 text-[16px] text-white cursor-pointer hover:bg-[#303034]">
                                        View all results
                                        <span className="ml-2">→</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="px-7 pb-6 text-[#99999d] text-sm">No results found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="min-[1023px]:hidden flex items-center ml-3 pt-5">
                <div onClick={() => setOpen(prev => !prev)} className={`text-[23px] hover:bg-[#7d7d7d95] p-2 px-2.5 duration-150 rounded-2xl w-fit ${opened ? "hidden" : ""}`}>
                    <IoMdSearch />
                </div>

                <div className={`relative w-[90vw] ${opened ? "flex" : "hidden"} bg-[#1f1f24] items-center justify-between p-3`}>
                    <div className="text-[23px]">
                        <IoMdSearch />
                    </div>

                    <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} className="pl-6 outline-none  bg-transparent text-[#f1f1f1] text-[14px] py-3 w-full border-none" />

                    <IoMdClose className="text-[46px] pr-5 cursor-pointer" onClick={() => { setOpen(false); setQuery('') }} />

                    {showResults && (
                        <div className="absolute z-50 top-full left-0 mt-2 w-full rounded-2xl bg-[#202024] border border-[#414145] shadow-2xl overflow-hidden">
                            <div className="px-3 pt-4 pb-2">
                                <p className="text-[10px] font-semibold text-[#99999d]">TOP RESULTS</p>
                            </div>

                            {results.length > 0 ? (
                                <div>
                                    {results.map((product) => (
                                        <div key={product.id} onClick={() => handleResultClick(product)} className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-[#303034]">
                                            <img src={product.coverImage.url} alt="" className="w-[30px] h-[40px] object-cover rounded" />
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-[10px] text-[#99999d]">Base Game</span>
                                                <span className="text-[12px] font-semibold text-white truncate">{product.name || product.title}</span>
                                            </div>
                                        </div>
                                    ))}

                                    <div onClick={handleSearch} className="px-3 py-4 text-[13px] text-white cursor-pointer hover:bg-[#303034]">
                                        View all results
                                        <span className="ml-2">→</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="px-3 pb-4 text-[#99999d] text-xs">No results found</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search