import React from "react";

const HomeSectionCard = ({product}) => {
  const { imgUrl, brand, title } = product;
  return (
    <div className="flex flex-col cursor-pointer  rounded-lg items-center  bg-white  shadow-lg overflow-hidden w-[15rem] h-[18rem] mx-3  shadow-gray-500">
      <div className="h-[13rem] w-[10rem] ">
        <img
          className="object-cover object-top w-full h-full"
          src={imgUrl}
          alt=""
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-grey-900">{brand}</h3>
        <p className="mt-2 text-sm text-grey-500"> {title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
