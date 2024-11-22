import React from "react";
import MainMenu from "./components/MainMenu";
import Advantages from "./components/Advantages";
import Direction from "./components/Direction";
import Popular from "./components/Popular";

const HomePage = () => {
  return (
    <div>
      <MainMenu />
      <Advantages />
      <Direction />
      <Popular />
    </div>
  );
};

export default HomePage;
