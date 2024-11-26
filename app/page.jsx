"use client";

import { useState, useEffect } from "react";
import Navbar from "../app/components/Navbar";
import HeroSection from "../app/components/HeroSection";
import WhatWeDo from "../app/components/WhatWeDo";
import Modal from "../app/components/Modal";
import ToolsSection from "../app/components/Tools";
import WhyDifferent from "../app/components/WhyDifferent";
import ClientsCarousel from "../app/components/ClientsCarousel";
import Partners from "../app/components/Partners";
import Footer from "../app/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNavbarHeightChange = (height) => {
    setNavbarHeight(height);
  };

  return (
    <>
      <Navbar onHeightChange={handleNavbarHeightChange} />
      <HeroSection navbarHeight={navbarHeight} />
      <WhatWeDo openModal={openModal} />
      <ToolsSection openModal={openModal} />
      <WhyDifferent />
      <ClientsCarousel />
      <Partners />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}