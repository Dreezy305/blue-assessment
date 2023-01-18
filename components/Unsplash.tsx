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
                 <div className="flip-box-back"></div>
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
