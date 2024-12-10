"use client";

import { openSans, montserrat } from "@/app/ui/fonts";
import "@/app/globals.css";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import Modal from "../components/Modal";

export default function RootLayout({ children }) {
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
    <html lang="es">
      <body
        className={`${openSans.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar onHeightChange={handleNavbarHeightChange} />

        {children}

        <Footer openModal={openModal} />
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </body>
    </html>
  );
}
