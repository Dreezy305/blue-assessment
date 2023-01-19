import { notification } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import Notification from "./Notification";

function InputAndOthers(): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row items-baseline md:space-x-24 lg:justify-between mb-4 lg:w-full md:w-10/12">
      <div className="flex flex-row relative">
        <input
          type="text"
          className="mt-4 px-14 pr-28 outline-none h-12 rounded-lg border border-solid border-dark focus:outline-none placeholder:text-purple font-medium placeholder:font-medium bg-white font-roboto lg:w-[600px] md:w-[450px]"
          placeholder="Find Something..."
        />
        <Image
          src={"/search.svg"}
          className="absolute img bg-white"
          alt="search_icon"
          width={24}
          height={24}
        />
        <button
          type="button"
          className="bg-deepPurple absolute mt-4 px-4 text-purple rounded-md py-3 flex flex-row items-center justify-center text-center font-medium button font-roboto"
        >
          Search
        </button>
      </div>

      <div className="flex flex-row justify-around lg:items-center space-x-7 md:items-baseline">
        <div
          className="relative cursor-pointer"
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Image
            src={"/img/bell.svg"}
            className="mr-3 cursor-pointer"
            alt="notification_bell"
            width={24}
            height={24}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          />
          {/* CARD GOES HERE */}
          <Notification
            className={`${
              show ? "block slide-in" : "hidden"
            } z-50 notification bg-white`}
          />

          <span className="badge-overlay circle">{notification.length}</span>
        </div>
        <div className="relative">
          <Image
            src={"/img/avatar_two.svg"}
            className="ml-5"
            alt="avatar"
            width={42}
            height={42}
          />
          <span className="dot bg-green"></span>
        </div>
        <div className="">
          <p className="pt-3 ml-5 text-darkText font-roboto font-medium">
            Abigail
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputAndOthers;
