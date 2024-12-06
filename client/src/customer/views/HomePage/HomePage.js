import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <>
    <div className=''>
      <MainCarousel/>
    </div>

    <div className='space-y-4 py-7 flex flex-col justify-center'>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
       <HomeSectionCarousel/>
    </div>
    </>
  )
}

export default HomePage