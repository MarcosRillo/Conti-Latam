import { useState, useRef, useEffect, useCallback } from "react";

export function useNavbarLogic(onHeightChange) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (navbarRef.current) {
      onHeightChange(navbarRef.current.offsetHeight);
    }
  }, [navbarRef, onHeightChange]);

  return {
    isOpen,
    isModalOpen,
    navbarRef,
    toggleMenu,
    openModal,
    closeModal,
  };
}