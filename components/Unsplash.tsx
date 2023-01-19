/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function Unsplash({ data }: any): JSX.Element {
  console.log(data, "here");
  const images = data?.data;
  return (
    <div className="mx-auto pt-6 mb-5 pb-5">
      <div className="md:grid md:grid-cols-5 md:gap-y-6 md:gap-x-6  lg:grid lg:grid-cols-5 lg:gap-y-6 md:w-full">
        {images.map((image: any, index: any) => {
          return (
            <div className="md:w-full lg:w-10/12 pb-3 flip-box" key={index}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    src={image.urls.small}
                    className="imgs cursor-pointer"
                    alt="unsplash_image"
                  />
                </div>
                <div className="absolute details bg-transparent px-3">
                  <div className="flex flex-col space-y-3">
                    <h2 className="flex flex-row items-baseline space-x-3">
                      <span className="bg-transparent font-roboto text-sm font-semibold text-dark">
                        {image.user.first_name}
                      </span>
                      <span className="bg-transparent font-roboto text-xs font-semibold text-dark">
                        {image.user.total_photos}
                      </span>
                    </h2>
                    <div className="flex flex-row items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-map-pin"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#fafafc"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                      <span className="text-xs bg-transparent font-roboto font-semibold text-dark truncate">
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
