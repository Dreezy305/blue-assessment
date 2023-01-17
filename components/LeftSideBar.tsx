/* eslint-disable @next/next/no-img-element */
import { menuInterface, sideBarTypes } from "@/utils/interfaces";
import React from "react";

function LeftSideBar(): JSX.Element {
  const menus: menuInterface[] = [
    { id: 1, image: "/ranking.svg", title: "Ranking" },
    { id: 2, image: "/challenge.svg", title: "Challenge" },
    { id: 3, image: "/party.svg", title: "Party" },
    { id: 4, image: "/connect.svg", title: "Connect" },
    { id: 5, image: "/parade.svg", title: "Parade" },
    { id: 6, image: "/group.svg", title: "Group" },
  ];

  const SideBarSection = ({ image, title }: sideBarTypes) => {
    return (
      <ul className="list-none p-0 m-0">
        <li className="flex flex-row items-center p-4 cursor-pointer space-x-3">
          <img src={image} className="" alt="logo_icon" />
          <p className="">{title}</p>
        </li>
      </ul>
    );
  };

  return (
    <div className="px-5 pt-3">
      <ul className="list-none p-0 m-0">
        <li className="flex flex-row items-center p-4 cursor-pointer space-x-3">
          <img
            src={"/cube.svg"}
            className="float-left ms-2 me-2"
            alt="bluecube"
          />
          <p className="font-medium text-xl" style={{ color: "#4841a0" }}>
            bluecube
          </p>
        </li>
        <li className="flex flex-row items-center p-4 cursor-pointer space-x-3">
          <img
            src={"/home.svg"}
            className="float-left ms-2 me-2"
            alt="logo_icon"
          />
          <p className="">Home</p>
        </li>
        <li className="flex flex-row items-center p-4 cursor-pointer space-x-3">
          <img
            src={"/message.svg"}
            className="float-left ms-2 me-2"
            alt="logo_icon"
          />
          <p className="">Message</p>
        </li>
        <li className="flex flex-row items-center p-4 cursor-pointer space-x-3">
          <p className="">SHARED</p>
        </li>
      </ul>

      {menus.map((menu: menuInterface) => (
        <SideBarSection key={menu.id} image={menu.image} title={menu.title} />
      ))}
    </div>
  );
}

export default LeftSideBar;
