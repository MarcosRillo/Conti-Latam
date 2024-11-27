"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ onHeightChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (navbarRef.current) {
      onHeightChange(navbarRef.current.offsetHeight);
    }
  }, [onHeightChange]);

  return (
    <nav
      ref={navbarRef}
      className="w-full flex flex-col lg:flex-row items-center bg-white px-3 py-4 lg:fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center justify-center w-full lg:w-auto">
        <div className="flex items-center flex-shrink-0 text-black ml-4">
          <Image
            className=""
            src="/logo/LogoCONTi_30-.png"
            alt="Logo"
            width={130}
            height={50}
            priority
          />
        </div>
        <div className="block lg:hidden mr-4">
          <button
            onClick={toggleMenu}
          >
            <MenuIcon className="cursor-pointer text-conti-blue" />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } block flex-grow lg:flex lg:items-center lg:w-auto z-50 mt-10`}
      >
        <div className="text-sm lg:flex-grow flex flex-col lg:flex-row items-center justify-center gap-7 flex-1">
          <Link
            href="#hero-section"
            className="inline-block mt-0 text-black hover:text-gray-500"
          >
            Inicio
          </Link>
          <Link
            href="#what-we-do"
            className="inline-block mt-0 text-black hover:text-gray-500"
          >
            Servicios
          </Link>
          <Link
            href="#tools-section"
            className="inline-block mt-0 text-black hover:text-gray-500"
          >
            Herramientas
          </Link>
          <Link
            href="#clients-carousel"
            className="inline-block mt-0 text-black hover:text-gray-500"
          >
            Clientes
          </Link>
          <Link
            href="#partners-section"
            className="inline-block mt-0 text-black hover:text-gray-500"
          >
            Partners
          </Link>
          <button
            onClick={openModal}
            className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-conti-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Contáctanos
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}
