import { Typography } from "@material-tailwind/react";
import MenuMajor from "./menuMajor";
import SchoolProfile from "./schoolProfile";

const NavLinks = () => {
  const navlinks = [
    { name: "Home", link: "#" },
    { name: "PPDB Online", link: "#" },
    { name: <MenuMajor />, link: "#" },
    { name: <SchoolProfile />, link: "#" },
    { name: "Galeri", link: "#" },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navlinks.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href={item.link}
            className="flex items-center hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        </Typography>
      ))}
    </ul>
  );
};

export default NavLinks;
