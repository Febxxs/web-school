/* eslint-disable react/prop-types */
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

import { useState } from "react";

const NavbarDropdown = ({ menu, title }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Menu allowHover open={openMenu} handler={setOpenMenu}>
      <MenuHandler className=" flex items-center  gap-2 cursor-pointer hover:text-primary  transition-colors">
        <div className="">
          {title}
          <IoIosArrowDown
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </div>
      </MenuHandler>
      <MenuList aria-hidden={!openMenu}>
        {menu.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavbarDropdown;
