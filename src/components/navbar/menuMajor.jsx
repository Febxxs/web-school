import NavbarDropdown from "./navbarDropdown";

const MenuMajor = () => {
  const dropdownMenu = ["Teknik Komputer Dan Jaringan", "Perbangkan Syariah"];

  return <NavbarDropdown menu={dropdownMenu} title="Paket Jurusan" />;
};

export default MenuMajor;
