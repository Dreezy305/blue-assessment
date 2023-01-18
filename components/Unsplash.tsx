/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function Unsplash({ data }: any): JSX.Element {
  console.log(data, "here");
  const images = data?.data;
  return (
    <div className="px-5 ps-0 mb-2">
      <div className="w-2/4">
        <img
          src={
            "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzg2MzF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY3NDAyMTQ1OQ&ixlib=rb-4.0.3&q=80&w=400"
          }
          className="mb-2 mt-2 imgs"
          alt="unsplash_image"
        />
      </div>
    </div>
  );
}

export default Unsplash;

/**
 *
 */
