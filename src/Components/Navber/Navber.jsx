import { Link, NavLink, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import Button from "../Button/Button";
import ThemeBtn from "../Theme/ThemeBtn";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

import { FaSearch } from "react-icons/fa";

const Navber = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();
  console.log(location.pathname);
  const handleButtonHover = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownHover = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  const list = (
    <div className=" flex lg:flex-row flex-col lg:gap-0 gap-5  md:dark:text-white dark:text-black">
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` font-bold text-sm  px-3 py-1 ${
            isActive
              ? "bg-gradient-to-r from-[#9e24b2] to-[#4724b2] text-white rounded-tr-xl rounded-bl-xl"
              : ""
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addbook"
        className={({ isActive }) =>
          ` font-bold text-sm  px-3 py-1 ${
            isActive
              ? "bg-gradient-to-r from-[#9e24b2] to-[#4724b2] text-white rounded-tr-xl rounded-bl-xl"
              : ""
          } `
        }
      >
        Add Book
      </NavLink>
      <NavLink
        to="/allbooks"
        className={({ isActive }) =>
          ` font-bold text-sm  px-3 py-1 ${
            isActive
              ? "bg-gradient-to-r from-[#9e24b2] to-[#4724b2] text-white rounded-tr-xl rounded-bl-xl"
              : ""
          } `
        }
      >
        All Books
      </NavLink>
      <NavLink
        to="/borrowedbooks"
        className={({ isActive }) =>
          ` font-bold text-sm  px-3 py-1 ${
            isActive
              ? "bg-gradient-to-r from-[#9e24b2] to-[#4724b2] text-white rounded-tr-xl rounded-bl-xl"
              : ""
          } `
        }
      >
        Borrowed Books
      </NavLink>
    </div>
  );
  return (
    <div
      className={`${
        location.pathname !== "/" && "md:px-10 px-4"
      }  navbar py-4 flex justify-between  max-w-7xl  m-auto items-center   `}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" text-2xl  px-3 lg:hidden"
            >
              <LuMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm z-50 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
          <Link
            to="/"
            className=" h-16 pb-2 text-xl mr-2 dark:hidden  duration-500"
          >
            <img
              src="https://i.ibb.co/t2f81VF/abib-removebg-preview.png"
              alt=""
              className="h-full w-full"
            />
          </Link>
          <Link
            to="/"
            className=" h-16 pb-2 text-xl mr-2 dark:block hidden  duration-500"
          >
            <img src={logo} alt="" className="h-full w-full" />
          </Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
      </div>

      <div className="space-x-4 ">
      

        <ThemeBtn />
        {loading ? (
          <>
            <div className="skeleton w-10 h-10   bg-[#4724b2] uppercase rounded-full shrink-0"></div>
            <div className="skeleton w-16 h-10   bg-[#4724b2] uppercase rounded shrink-0"></div>
          </>
        ) : user?.photoURL ? (
          <div className="flex items-center gap-4">
            <div className="relative avatar">
              <div
                onMouseEnter={handleButtonHover}
                className=" w-10 rounded-full ring ring-[#9e24b2] dark:ring-[#9e24b2] ring-offset-white duration-500 ring-offset-2"
              >
                <img src={user.photoURL} alt="User Avatar" className="" />
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute z-50 p-3 top-full right-0 mt-1 w-40   bg-[#181414cc] duration-500    rounded-md shadow-lg"
                  onMouseEnter={handleDropdownHover}
                  onMouseLeave={handleDropdownLeave}
                >
                  <ul className="  text-white font-bold duration-500 h-full ">
                    <li>{user.displayName}</li>
                    <button
                      className="btn border-none text-white font-bold bg-gradient-to-r from-[#9e24b2] to-[#4724b2] "
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button
                className={` px-5 py-2 rounded-lg font-bold border-2  border-[#9e24b2] bg-white `}
              >
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
