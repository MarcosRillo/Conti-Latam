import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { navbarStyles } from "@/app/ui/navbarStyle";
import MenuIcon from "@mui/icons-material/Menu";

export default function HamburgerMenu({ openModal }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={navbarStyles.menuButton}>
      <button onClick={handleClick}>
        <MenuIcon className={navbarStyles.menuIcon} sx={{ fontSize: 27 }} />
      </button>
      <Menu
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         MenuListProps={{
           "aria-labelledby": "basic-button",
         }}
         anchorOrigin={{
           vertical: "bottom",
           horizontal: "right",
         }}
         transformOrigin={{
           vertical: "top",
           horizontal: "right",
         }}
         transitionDuration={300}
         sx={{
           "& .MuiPaper-root": {
             backgroundColor: "white",
             borderRadius: "8px",
             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
           },
         }}
      >
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <Link href="#hero-section" className={navbarStyles.link}>
            Inicio
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <Link href="#what-we-do" className={navbarStyles.link}>
            Servicios
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <Link href="#tools-section" className={navbarStyles.link}>
            Herramientas
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <Link href="#clients-carousel" className={navbarStyles.link}>
            Clientes
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <Link href="#partners-section" className={navbarStyles.link}>
            Partners
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} className={navbarStyles.menuItem}>
          <button onClick={openModal} className={navbarStyles.contactButton}>
            Contáctanos
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
}