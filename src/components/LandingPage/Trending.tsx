import React from 'react'
import Product from '../Product/Product'

const Trending = () => {
  return (
    <>
      <div className="my-3 flex justify-between items-center">
        <h1 className="uppercase text-xl font-bold">Trending Now</h1>
        <p className="uppercase font-bold text-sm">Discovery All Products</p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        <Product />
        <Product />
        <Product />
      </div>
    </>
  )
}

export default Trending