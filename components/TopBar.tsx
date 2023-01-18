import { ImageContextProvider } from "@/contexts/imageContext";
import React, { useContext } from "react";
import FilterOptions from "./FilterOptions";
import InputAndOthers from "./InputAndOther";
import Unsplash from "./Unsplash";

function TopBar(): JSX.Element {
  const data = useContext(ImageContextProvider);

  return (
    <div className="pt-3 w-full flex flex-col items-start space-y-3 justify-start px-4">
      <InputAndOthers />
      <FilterOptions />
      <Unsplash data={data} />
    </div>
  );
}

export default TopBar;
