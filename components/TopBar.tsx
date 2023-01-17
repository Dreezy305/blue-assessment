import React from "react";
import FilterOptions from "./FilterOptions";
import InputAndOthers from "./InputAndOther";

function TopBar(): JSX.Element {
  return (
    <div className="pt-3 w-full flex flex-col items-start space-y-3 relative px-3">
      <InputAndOthers />
      <FilterOptions />
    </div>
  );
}

export default TopBar;
