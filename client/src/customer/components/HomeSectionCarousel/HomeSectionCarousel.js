import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items =[1,1,1,1,1].map((items)=><HomeSectionCard/>)

  return (<AliceCarousel
    items={items}
    responsive={responsive}
   disableButtonsControls
   autoPlay
   autoPlayInterval={1000}
   infinite
/>
  )
}

export default HomeSectionCarousel