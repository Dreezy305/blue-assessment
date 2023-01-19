import Image from "next/image";
import React from "react";

function FilterOptions(): JSX.Element {
  return (
    <div className="">
      <div className="flex flex-row place-self-center options w-full">
        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto text-darkText font-medium">
              World
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto font-medium text-darkText">
              Following
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto font-medium text-darkText">
              Popular
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto text-darkText font-medium">
              Post
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto font-medium text-darkText">
              Gender
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2 font-roboto font-medium text-darkText">
              Location
            </span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>

        <div
          className="options_content"
          style={{ borderRight: "0px solid #f5f5f5" }}
        >
          <p className="flex flex-row items-center space-x-3 py-2 px-3 font-medium text-darkText">
            <span className="me-2 font-roboto">Profession</span>
            <span className="">
              <Image
                src={"/img/chevronDown.svg"}
                className=""
                alt="chevron_down"
                width={30}
                height={30}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
