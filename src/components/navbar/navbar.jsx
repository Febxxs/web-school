import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../logo/logo";
import NavLinks from "./navLinks";
import { useEffect, useState } from "react";

const NavbarMain = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <Navbar
      fullWidth={true}
      className="w-full mx-auto shadow-none px-6 border-b border-gray-400"
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaXmark className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavLinks />
      </Collapse>
    </Navbar>
  );
};

export default NavbarMain;
