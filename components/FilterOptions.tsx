/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function FilterOptions(): JSX.Element {
  return (
    <>
      <div className="flex flex-row options lg:w-4/5 md:w-10/12 border border-solid border-borderLight rounded-lg">
        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            World
          </span>
          <span className="">
            <img src={"/img/chevronDown.svg"} className="" alt="chevron_down" />
          </span>
        </div>

        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Following
          </span>
          <span className="">
            <img
              src={"/img/chevronDown.svg"}
              className=""
              alt="chevron_down"
              // width={30}
              // height={30}
            />
          </span>
        </div>

        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Popular
          </span>
          <span className="">
            <img src={"/img/chevronDown.svg"} className="" alt="chevron_down" />
          </span>
        </div>

        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Post
          </span>
          <span className="">
            <img
              src={"/img/chevronDown.svg"}
              className=""
              alt="chevron_down"
              // width={30}
              // height={30}
            />
          </span>
        </div>

        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Gender
          </span>
          <span className="">
            <img
              src={"/img/chevronDown.svg"}
              className=""
              alt="chevron_down"
              // width={30}
              // height={30}
            />
          </span>
        </div>

        <div className="cursor-pointer border-r-2 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Location
          </span>
          <span className="">
            <img src={"/img/chevronDown.svg"} className="" alt="chevron_down" />
          </span>
        </div>

        <div className="cursor-pointer border-r-0 border-solid border-r-light flex flex-row justify-between items-center px-4">
          <span className="me-2 font-roboto font-medium text-darkText">
            Profession
          </span>
          <span className="">
            <img src={"/img/chevronDown.svg"} className="" alt="chevron_down" />
          </span>
        </div>
      </div>
    </>
  );
}

export default FilterOptions;
