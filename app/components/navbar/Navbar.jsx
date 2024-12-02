"use client";

import Modal from "@/app/components/Modal";
import Logo from "@/app/components/navbar/Logo";
import MenuButton from "@/app/components/navbar/MenuButtom";
import NavLinks from "@/app/components/navbar/NavLinks";
import { useNavbarLogic } from "@/app/lib/navbarLogic";
import { navbarStyles } from "@/app/ui/navbarStyle";

export default function Navbar({ onHeightChange }) {
  const {
    isOpen,
    isModalOpen,
    navbarRef,
    toggleMenu,
    openModal,
    closeModal,
  } = useNavbarLogic(onHeightChange);

  return (
    <nav ref={navbarRef} className={navbarStyles.nav}>
      <div className={navbarStyles.logoContainer}>
        <Logo />
        <MenuButton onClick={toggleMenu} />
      </div>
      <NavLinks isOpen={isOpen} openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}