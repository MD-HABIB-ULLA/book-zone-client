import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Categories = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5 p-3">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="  md:text-5xl text-center text-2xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10 py-5 "
      >
        Our Books Categories
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-16 gap-10">
        <Link to={"/categorie/Sports"} className=" cursor-pointer">
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/1qvrwNj/ILGSN7j.jpg)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-center rounded-[30px] hover:-translate-y-5   duration-500 relative hover:shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>sports</p>
            </div>
          </div>
        </Link>
        <Link to={"/categorie/Computers"} className=" cursor-pointer">
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/S3VXKRP/3147196.jpg)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-right rounded-[30px] hover:-translate-y-5   duration-500 relative hover:shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>Science</p>
            </div>
          </div>
        </Link>
        <Link to={"/categorie/History"} className=" cursor-pointer">
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/BTPRfpK/651717.jpg)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-center rounded-[30px] hover:-translate-y-5   duration-500 relative hover:shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>History</p>
            </div>
          </div>
        </Link>
        <Link to={"/categorie/Medical"} className=" cursor-pointer">
          <div
            style={{
              backgroundImage: "url(https://i.ibb.co/F5jgJZS/wp2386748.webp)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-center rounded-[30px] hover:-translate-y-5   duration-500 relative hover:shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>Medical</p>
            </div>
          </div>
        </Link>
        <Link to={"/categorie/Home & Garden"} className="  cursor-pointer">
          <div
            style={{
              backgroundImage:
                "url(https://i.ibb.co/9tr9pNW/07-Immune-Surprising-Health-benefits-Gardening-459405181-monkeybusinessimages.jpg)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-center rounded-[30px] hover:-translate-y-5   duration-500 relative shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>Garden</p>
            </div>
          </div>
        </Link>
        <Link to={"/categorie/Entertainment"} className="  cursor-pointer">
          <div
            style={{
              backgroundImage:
                "url(https://i.ibb.co/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg)",
            }}
            className="md:h-[400px] h-[300px] bg-cover bg-center rounded-[30px] hover:-translate-y-5   duration-500 relative shadow-lg"
          >
            <div className="h-full w-full bg-black/20 rounded-[30px]"></div>
            <div className="md:text-3xl text-2xl uppercase text-white w-full text-center font-bold absolute top-7  ">
              <p>Entertainment</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;

// https://i.ibb.co/F5jgJZS/wp2386748.webp
// https://i.ibb.co/9tr9pNW/07-Immune-Surprising-Health-benefits-Gardening-459405181-monkeybusinessimages.jpg
// https://i.ibb.co/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg
