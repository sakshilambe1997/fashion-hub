import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import WOMENS_KURTAS from "../../../Data/womensKurta";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HomeSectionCarousel = () => {
    const[activeIndex, setActivceIndex]=useState(0)
  
    const setPreview=()=>{
      const lastElement = WOMENS_KURTAS[WOMENS_KURTAS.length-1]
      WOMENS_KURTAS.pop();
      WOMENS_KURTAS.unshift(lastElement)
      setActivceIndex(activeIndex-1)
    }

    const setNext= ()=>{
      const firstElement = WOMENS_KURTAS[0]
      WOMENS_KURTAS.shift();
      WOMENS_KURTAS.push(firstElement);
      setActivceIndex(activeIndex+1)
    }


  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = WOMENS_KURTAS.map((item,i) =><HomeSectionCard product ={item} />
  
  ) ;

  return (
    <div className=" relative px-3 bg-slate-100 w-full items-center block mx-auto my-0 " >
      <div className=" p-7">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
          disableDotsControls
        />

      <button className=" absolute top-28 left-3 bg-white px-1 py-3 border border-black rounded hover:bg-sky-400" onClick={setPreview}>
      <KeyboardArrowLeftIcon />
      </button>

      <button className=" absolute top-28 right-2 bg-white px-1 py-3 border border-black rounded hover:bg-sky-400" onClick={setNext}>
      <ChevronRightIcon/>
      </button>
      
      </div>
    </div>
  );
};


export default HomeSectionCarousel;
