/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function Unsplash({ data }: any): JSX.Element {
  console.log(data, "here");
  const images = data?.data;
  return (
    <div className="mx-auto pt-6 mb-5 pb-5">
      <div className="grid grid-cols-5 gap-y-6">
        {images.map((image: any, index: any) => {
          return (
            <div className="w-10/12 pb-3 flip-box" key={index}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    src={image.urls.small}
                    className="imgs cursor-pointer"
                    alt="unsplash_image"
                  />
                </div>
                <div className="absolute bottom-0 bg-transparent px-3">
                  <div className="flex flex-col space-y-3">
                    <h2 className="flex flex-row items-baseline space-x-3">
                      <span className="bg-transparent font-roboto text-sm">
                        {image.user.first_name}
                      </span>
                      <span className="bg-transparent font-roboto text-xs">
                        {image.user.total_photos}
                      </span>
                    </h2>
                    <div className="flex flex-row items-center space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-map-pin"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="text-xs bg-transparent font-roboto">
                        {image.user.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Unsplash;

/**
 *
 */
