import React from "react";

import {text} from './services/text';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PresentationSection from "./components/PresentationSection";
import ImagesSection from "./components/ImagesSection";
import VideoPlayer from "./components/VideoPlayer";
import SecondImageSection from "./components/SecondImageSection";

import TextSection from './components/TextSection';

import "./style.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PresentationSection />
      <ImagesSection />
      <TextSection title={text[1].title} text={text[1].subtitle} />
      <VideoPlayer />
      <TextSection title={text[2].title} text={text[2].subtitle} />
      <SecondImageSection />
      <TextSection title={text[3].title} text={text[3].subtitle} />
    </>
  );
}
