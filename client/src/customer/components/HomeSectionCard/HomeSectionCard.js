import React from "react";

const HomeSectionCard = ({product}) => {
  const { imgUrl, brand, title } = product;
  return (
    <div className="flex flex-col cursor-pointer items-center rounded-lg  bg-white  shadow-lg overflow-hidden w-[15rem] mx-3  border border-black">
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={imgUrl}
          alt=""
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-grey-900">{brand}</h3>
        <p className="mt-2 text-sm text-grey-500"> hello panula</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
