import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import Button from "../Button/Button";
import ThemeBtn from "../Theme/ThemeBtn";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

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
    <div className=" flex lg:flex-row flex-col lg:gap-0 gap-5 md:dark:text-white dark:text-black">
      <NavLink
        to="/"
        className={({ isActive }) =>
          ` font-bold text-base  px-3 py-1 ${
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
          ` font-bold text-base  px-3 py-1 ${
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
          ` font-bold text-base  px-3 py-1 ${
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
          ` font-bold text-base  px-3 py-1 ${
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
    <div className=" navbar py-4 flex justify-between  container m-auto items-center md:px-0 px-4 ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        ) : user?.email ? (
          <div className="flex items-center gap-4">
            <div className=" avatar">
              <div className=" w-10 rounded-full ring ring-[#9e24b2] dark:ring-[#9e24b2] ring-offset-white duration-500 ring-offset-2">
                <img title={user.displayName} src={user.photoURL} alt="User Avatar" className="" />
              </div>
            </div>
            <button
              
              className="btn border-none text-white font-bold bg-gradient-to-r from-[#9e24b2] to-[#4724b2] "
              onClick={handleLogout}
            >
            
              Logout
            </button>
          </div>
        ) : (
          <>
            {" "}
            <Link to="/login">
              <Button
                text="Login"
                className={`${
                  loading ? "" : "skeleton"
                }skeleton btn border-none bg-gradient-to-r from-[#9e24b2] to-[#4724b2] `}
              ></Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
