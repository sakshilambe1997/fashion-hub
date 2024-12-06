import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <>
    <div>
      <MainCarousel/>
    </div>

    <div>
       <HomeSectionCarousel/>
    </div>
    </>
  )
}

export default HomePage