import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PresentationSection from "./components/PresentationSection";
import ImagesSection from "./components/ImagesSection";

import "./style.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PresentationSection />
      <ImagesSection />
    </>
  );
}
