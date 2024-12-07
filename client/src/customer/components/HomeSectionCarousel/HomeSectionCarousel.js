import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);

  return (
    <div className=" relative px-3 bg-slate-100 " >
      <div className=" p-7 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
          disableDotsControls
        />

      <button className=" absolute top-28 left-3 bg-white px-1 py-3 border border-black rounded hover:bg-sky-400">
      <KeyboardArrowLeftIcon />
      </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
