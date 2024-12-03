import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCarouselData from './HomeCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
};


const MainCarousel = () => {

    const items = HomeCarouselData.map(((item)=><img className='cursor-pointer h-3/6 w-screen' src={item.image} alt=''/>
))

    return (<AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
    />)
    };

export default MainCarousel