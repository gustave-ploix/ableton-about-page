import React from "react";

import Navbar from "./components/Navbar";
import Header from './components/Header';
import PresentationSection from "./components/PresentationSection";

import './style.scss';

export default function App() {
    return (
        <>
        <Navbar />
        <Header />
        <PresentationSection />
        </>
    );
};