"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Modal from "@/app/components/Modal";
import Logo from "@/app/components/navbar/Logo";
import NavLinks from "@/app/components/navbar/NavLinks";
import HamburgerMenu from "@/app/components/navbar/MenuHamb";
import { useNavbarLogic } from "@/app/lib/navbarLogic";
import { navbarStyles } from "@/app/ui/navbarStyle";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

export default function Navbar({ onHeightChange }) {
  const { isOpen, isModalOpen, navbarRef, toggleMenu, openModal, closeModal } =
    useNavbarLogic(onHeightChange);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(navbarRef.current); // Establecer el navbar como el punto de anclaje
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav ref={navbarRef} className={navbarStyles.nav}>
      <div className={navbarStyles.logoContainer}>
        <Logo />
        <div className={navbarStyles.menuButton}>
          <button onClick={handleClick}>
            <MenuIcon className={navbarStyles.menuIcon} sx={{ fontSize: 27 }} />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom", // Ajusta la posición vertical del menú
              horizontal: "center", // Ajusta la posición horizontal del menú
            }}
            transformOrigin={{
              vertical: "top", // Ajusta la posición vertical del menú
              horizontal: "center", // Ajusta la posición horizontal del menú
            }}
            transitionDuration={500}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "white", // Cambiar el color de fondo del menú
                borderRadius: "0px", // Cambiar el radio de borde del menú
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Cambiar la sombra del menú
                marginTop: "3px", // Ajusta la posición vertical del menú
                left: "50%", // Centra el menú horizontalmente
                transform: "translateX(-50%)", // Centra el menú horizontalmente
                width: "80%",
              },
            }}
          >
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <Link href="#hero-section" className={`${navbarStyles.link}`}>
                Inicio
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <Link href="#what-we-do" className={`${navbarStyles.link}`}>
                Servicios
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <Link href="#tools-section" className={`${navbarStyles.link}`}>
                Herramientas
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <Link href="#clients-carousel" className={`${navbarStyles.link}`}>
                Clientes
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <Link href="#partners-section" className={`${navbarStyles.link}`}>
                Partners
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
              <button
                onClick={openModal}
                className={`${navbarStyles.contactButton} w-full`}
              >
                Contáctanos
              </button>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <NavLinks isOpen={isOpen} openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}