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
                {/* <div className="flip-box-back ">
                  <img
                    src={image.urls.small}
                    className="imgs cursor-pointer"
                    alt="unsplash_image"
                  />
                  <div className="p-2">
                    <h2 className="flex flex-row p">
                      <span className="">{image.user.first_name}</span>
                      <span className="">{image.user.last_name}</span>,
                      <span className="">{image.user.total_photos}</span>
                    </h2>
                    <p className="flex flex-row p" id="p">
                      <span className="me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
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
                      </span>
                      <span>{image.user.location}</span>
                    </p>
                    <div className="flex flex-row "></div>
                  </div>
                </div> */}
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
