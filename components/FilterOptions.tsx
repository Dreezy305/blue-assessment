import Image from "next/image";
import React from "react";

function FilterOptions(): JSX.Element {
  return (
    <div className="">
      <div className="flex flex-row place-self-center options w-full">
        <div className="options_content">
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2">World</span>
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
            <span className="me-2">Following</span>
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
            <span className="me-2">Popular</span>
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
            <span className="me-2">Post</span>
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
            <span className="me-2">Gender</span>
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
            <span className="me-2">Location</span>
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
          <p className="flex flex-row items-center space-x-3 py-2 px-3">
            <span className="me-2">Profession</span>
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
