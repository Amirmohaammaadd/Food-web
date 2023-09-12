import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { LuSearch } from "react-icons/lu";
import {
  BsCartPlusFill,
  BsFillHeartFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { FaTruck, FaWallet } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1850px] mx-auto flex justify-between items-center p-4">
      {/* left side */}

      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer mt-1">
          <MenuOutlinedIcon style={{ fontSize: "35px" }} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div
          className="hidden lg:flex items-center bg-gray-200
         rounded-full p-1 text-[14px] mt-1"
        >
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2 font-bold">Pickup</p>
        </div>
      </div>

      {/* search input  */}

      <div
        className="bg-gray-200 rounded-full flex items-center 
      px-2 w-[200px] sm:w-[400px] lg:w-[500px] "
      >
        <LuSearch className="cursor-pointer" title="Search" size={23} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent p-2 
        focus:outline-none w-full"
        />
      </div>

      {/* add to cart button */}
      <button
        className="bg-black text-white hidden 
      md:flex items-center py-2 rounded-full"
      >
        <BsCartPlusFill size={20} className="mr-2" />
        Cart
      </button>

      {/* mobile menu */}

      {/* overlay */}
      {nav ? (
        <div
          className="bg-black/80 fixed w-full h-screen z-10s top-0
      left-0"
        ></div>
      ) : (
        ""
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white/ z-10 duration-300"
        }
      >
        <RiCloseFill
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-3 top-5
         cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li>
              <a href="/" className="text-2xl p-4 flex">
                <FaTruck className="mr-4 mt-1" /> Orders
              </a>
            </li>
            <li>
              <a href="/" className="text-2xl p-4 flex">
                <BsFillHeartFill className="mr-4 mt-1" /> Favorites{" "}
              </a>
            </li>
            <li>
              <a href="/" className="text-2xl p-4 flex">
                <FaWallet className="mr-4 mt-1" /> Wallet
              </a>
            </li>
            <li>
              <a href="/" className="text-2xl p-4 flex">
                <BiSolidHelpCircle className="mr-4 mt-1" /> Help
              </a>
            </li>
            <li>
              <a href="/" className="text-2xl p-4 flex">
                <BsFillPersonPlusFill className="mr-4 mt-1" /> Invite Others
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
