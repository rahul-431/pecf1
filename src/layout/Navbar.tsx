import { useState } from "react";
import Heading from "../ui/Heading";
import Navitem from "../ui/Navitem";
import { HiBars3, HiMiniBackspace } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-20 text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Heading />
        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          <NavLink
            to="#"
            className="black  md:text-xl px-2 py-1 hover:text-yellow-500"
          >
            <BsCart3 />
          </NavLink>
          <NavLink
            to="#"
            className="black  md:text-xl px-2 py-1 hover:text-yellow-500"
          >
            <VscAccount />
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl  rounded-lg md:hidden hover:border-2 border-yellow-500"
          >
            {isOpen ? <HiMiniBackspace /> : <HiBars3 />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="relative flex flex-col justify-around p-2 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0">
            <Navitem to="shop" name="Shop" />
            <Navitem to="#" name="Offers" />
            <Navitem to="#" name="Contact Us" />
            <Navitem to="#" name="Blog" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
