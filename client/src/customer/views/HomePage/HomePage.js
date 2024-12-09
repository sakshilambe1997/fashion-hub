import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import WOMENS_KURTAS from '../../../Data/WomensKurta'
import WOMENS_LEHENGA from '../../../Data/WomensLehenga'

function HomePage() {
  return (
    <>
    <div className=''>
      <MainCarousel/>
    </div>

    <div className='space-y-4 py-7 flex flex-col justify-center'>
       <HomeSectionCarousel data={WOMENS_KURTAS} sectionName="Women's Kurta"/>
       <HomeSectionCarousel data={WOMENS_LEHENGA}   sectionName="Women's Lehenga" />
       
    </div>
    </>
  )
}

export default HomePage