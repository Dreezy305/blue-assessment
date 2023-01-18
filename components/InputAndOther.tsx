import Image from "next/image";
import React from "react";

function InputAndOthers(): JSX.Element {
  return (
    <div className="flex flex-row items-baseline justify-between mb-4 w-full">
      <div className="topbar mr-5 flex flex-row relative">
        <input
          type="text"
          className="mt-4 px-14 pr-28 outline-none h-12 rounded-lg border border-solid border-dark focus:outline-none placeholder:text-purple font-medium placeholder:font-medium"
          placeholder="Find Something..."
        />
        <Image
          src={"/search.svg"}
          className="absolute img"
          alt="search_icon"
          width={24}
          height={24}
        />
        <button
          type="button"
          className="bg-deepPurple absolute mt-4 px-4 text-purple rounded-md py-3 flex flex-row items-center justify-center text-center font-medium button"
        >
          Search
        </button>
      </div>

      <div className="ml-5 flex flex-row justify-around items-center topbar_left pr-5 space-x-7">
        <div className="relative cursor-pointer">
          <Image
            src={"/img/bell.svg"}
            className="mr-3 cursor-pointer"
            alt="notification_bell"
            width={24}
            height={24}
          />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3733a2"
          >
            <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"></path>
          </svg> */}

          <span className="badge-overlay circle">3</span>
        </div>
        <div className="relative">
          <Image
            src={"/img/avatar_two.svg"}
            className="ml-5"
            alt="avatar"
            width={42}
            height={42}
          />
          <span className=" dot bg-green"></span>
        </div>
        <div className="place-self-start">
          <p className="pt-3 ml-5 text-darkText">Abigail</p>
        </div>
      </div>
    </div>
  );
}

export default InputAndOthers;
