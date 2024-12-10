import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <>

    <div className='productcard w-[15rem] m-3 transition-allcursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src='https://m.media-amazon.com/images/I/81pCdAm35JL._AC_UL480_FMwebp_QL65_.jpg' />

        </div>

        <div className='textPart bg-white p-3'>
          <div>
            <p className='font-bold opacity-60'>Universaloutfit</p>
            <p> Casual Puff Sleeves Solid Women White Top</p>
          </div>
          <div>
            <p className='font-semibold'>₹199</p>
            <p className='line-through opacity-50'>₹1999</p>
            <p className='text-green-600 font-semibold'>70% off</p>
          </div>

        </div>

    </div>
    
    </>
  )
}

export default ProductCard