import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import "animate.css";

const Banner = () => {
  return (
    <div
      className=" bg-right-top bg-mobile bg-contain  max-w-7xl m-auto md:px-10  px-5  bg-no-repeat  "
      // style={{ backgroundImage: "url(https://i.ibb.co/zx40tDm/Group-1-3.png)" }}
    >
      <Navber />
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
          <div className=" my-auto lg:mt-20 md:mt-5  duration-500 animate__animated animate__fadeInUp  ">
            <h1 className="lg:text-5xl text-4xl  font-bold mb-5 md:text-left text-center dark:text-white text-black">
              Search & review your{" "}
              <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
                fav book{" "}
              </span>
              effortlessly
            </h1>
            <p className="md:text-sm text-[13px] dark:text-white text-gray-600 md:text-left text-center">
              Step into the sanctuary of literature, where every page holds the
              promise of adventure, enlightenment, and escape. In the cozy
              embrace of a good book, imaginations soar and hearts are stirred.
              Discover worlds within words, where characters leap off the page
              and stories come to life.
            </p>
            <Link to={"/allbooks"} className="  md:block flex items-center justify-center">
              <button className="relative  rounded-lg px-10 py-3 overflow-hidden group bg-gradient-to-r from-[#431866] to-[#7224b2]  hover:bg-gradient-to-r hover:from-[#431866] hover:to-[#7224b2] text-white transition-all mt-4 ease-out duration-300">
                <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
                <span className="relative lg:text-base text-sm font-semibold">Read Now</span>
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center animate__animated animate__fadeInUp">
            <div className="box-border  md:p-10">
              <img
                src="https://i.ibb.co/nRmcc6P/Group-2.png"
                className="object-cover object-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
