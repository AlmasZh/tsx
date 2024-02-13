import NavbarName from "./NavbarName";


function Navbar() {
  return(
    <div className="w-full h-14 min-h-14 bg-[#212121] py-[4px] pr-[13px] pl-[23px] m-0 box-border relative">
      <div className="flex w-[100%] h-[100%] items-center">
        <NavbarName />
      </div>
    </div>
  );
}

export default Navbar;