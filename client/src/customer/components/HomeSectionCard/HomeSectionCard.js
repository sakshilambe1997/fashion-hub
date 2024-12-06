import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='flex flex-col cursor-pointer items-center rounded-lg  bg-white  shadow-lg overflow-hidden w-[15rem] mx-3  border border-black'>

<div className='h-[13rem] w-[10rem] '>  
    <img className='object-cover object-top w-full h-full'  src='https://m.media-amazon.com/images/I/41Kmlwhpa4L._AC_UL480_FMwebp_QL65_.jpg' alt=''/>
</div>

<div>
    <h3 className='text-lg font-medium text-grey-900'>Nofilter</h3>
    <p className='mt-2 text-sm text-grey-500'> Men Solid Pure Cotton Kurta</p>
</div>
    </div>
  )
}

export default HomeSectionCard