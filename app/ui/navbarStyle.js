import clsx from "clsx";

export const navbarStyles = {
  nav: "w-full flex flex-col lg:flex-row justify-around bg-white py-3 px-2 lg:py-5 fixed top-0 left-0 right-0 z-50 shadow-md",
  logoContainer: "flex lg:flex-1 items-center w-full px-10 w-auto",
  logo: "flex items-center text-black w-full lg:justify-center",
  menuButton: "block lg:hidden",
  menuIcon: "cursor-pointer text-conti-blue",
  menuClasses: (isOpen) =>
    clsx(
      isOpen ? "block" : "hidden",
      "block flex-grow lg:flex lg:items-center mt-6 lg:mt-0 z-50"
    ),
  linksContainer:
    "text-sm lg:flex-1 lg:flex-grow flex flex-col lg:flex-row items-center justify-center lg:gap-7 flex-1",
  link: "block mt-0 text-gray-500 w-full py-3 text-sm font-semibold lg:text-center lg:w-auto hover:text-conti-blue hover:font-semibold border-b border-gray-200 lg:border-0",
  contactButton:
    "px-4 py-2 border-2 border-transparent font-semibold rounded-md text-sm font-medium text-white bg-conti-blue hover:bg-white hover:text-conti-blue hover:border-conti-blue",
  menuItem: "",
};
