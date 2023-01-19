import Image from "next/image";
import React from "react";

type Props = {
  className: string;
};

function Notification({ className }: Props): JSX.Element {
  return (
    <div
      className={`${className} bg-white rounded-2xl flex flex-col w-72 shadow-md py-2 z-50`}
    >
      {[1, 2, 3].map((i, idx) => {
        return (
          <>
            {" "}
            <div
              className="flex flex-row justify-between items-baseline px-3 py-4"
              key={i + idx}
            >
              <div className="flex flex-row items-center space-x-2">
                <Image
                  src={"/img/avatar_two.svg"}
                  className=""
                  alt="avatar"
                  width={42}
                  height={42}
                  style={{ borderRadius: "100%" }}
                />
                <p className="flex flex-col">
                  <span className="text-sm font-roboto">Micheal liked you</span>
                  <span className="text-xs font-roboto">last seen 2 days</span>
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-heart"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ff4500"
                  fill="#ff4500"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </div>
            </div>
            {i === 3 ? "" : <hr />}
          </>
        );
      })}
    </div>
  );
}

export default Notification;
