// components/PackageSlider.js
import React from "react";

import PackageCard from "./PackageCard";
import {PackageSliderWrapper} from "../../mui/HomePkgs";

const PackageSlider = () => {
  return (
    <PackageSliderWrapper>
      <PackageCard />
    </PackageSliderWrapper>
  );
};

export default PackageSlider;
