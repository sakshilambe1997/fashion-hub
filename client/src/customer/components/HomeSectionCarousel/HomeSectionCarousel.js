import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = [1, 1, 1, 1, 1].map((items) => <HomeSectionCard />);

  return (
    <div className=" relative px-3 bg-slate-100" >
      <div className="relative p-7 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
          disableDotsControls
        />

        {/* <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "30rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon />
        </Button>

        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="privious"
        >
          <KeyboardArrowLeftIcon />
        </Button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
