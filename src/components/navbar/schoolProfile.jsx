import NavbarDropdown from "./navbarDropdown";

const SchoolProfile = () => {
  const menu = ["Sejarah Singkat", "Visi & Misi"];
  return <NavbarDropdown title="Profile Sekolah" menu={menu} />;
};

export default SchoolProfile;
