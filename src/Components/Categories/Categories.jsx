import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Card/Card";

AOS.init();

const Categories = () => {
  return (
    <div className="max-w-7xl m-auto md:px-10 px-5 p-3">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        className="  md:text-5xl  text-center text-3xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10  py-5 mb-10"
      >
        Our Books{" "}
        <span className="border-b-2 border-[#7224b2] text-[#7224b2]">
          Categories
        </span>
      </div>

      <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
        <div className="">
          <Link to={"/categorie/Computers"} className=" cursor-pointer">
            <Card
              height={"md:h-24 h-32"}
              image={"https://i.ibb.co/S3VXKRP/3147196.jpg"}
              Category={"Science"}
            />
          </Link>
        </div>
        <div>
        <Link to={"/categorie/Medical"} className=" cursor-pointer">
            <Card
              height={"md:h-24 h-32"}
              image={"https://i.ibb.co/F5jgJZS/wp2386748.webp"}
              Category={"Medical"}
            />
          </Link>
        </div>
        <div className="row-span-2 h-full">
        <Link to={"/categorie/Entertainment"} className="  cursor-pointer">
            <Card
              height={"md:h-52 h-32"}
              image={
                "https://i.ibb.co/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg"
              }
              Category={"Entertainment"}
            />
          </Link>
        </div>
        <div className="row-span-2">
          <Link to={"/categorie/History"} className=" cursor-pointer">
            <Card
              height={"md:h-52 h-32"}
              image={"https://i.ibb.co/BTPRfpK/651717.jpg"}
              Category={"History"}
            />
          </Link>
        </div>
        <div>
        <Link to={"/categorie/Sports"} className=" cursor-pointer">
            <Card
              height={"md:h-24 h-32"}
              image={"https://i.ibb.co/1qvrwNj/ILGSN7j.jpg"}
              Category={"Sports"}
            />
          </Link>
        </div>
        <div>
        <Link to={"/categorie/Home & Garden"} className="  cursor-pointer">
            <Card
              height={"md:h-24 h-32"}
              image={
                "https://i.ibb.co/9tr9pNW/07-Immune-Surprising-Health-benefits-Gardening-459405181-monkeybusinessimages.jpg"
              }
              Category={"garden"}
            />
          </Link>
        </div>
        <div>
          <Link to={"/categorie/History"} className=" cursor-pointer">
            <Card
              height={"md:h-24 h-32"}
              image={
                "https://i.ibb.co/QCnhtD2/pngtree-fairy-world-scene-in-tale-picture-image-2422015.png"
              }
              Category={"Story"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

// https://i.ibb.co/F5jgJZS/wp2386748.webp
// https://i.ibb.co/9tr9pNW/07-Immune-Surprising-Health-benefits-Gardening-459405181-monkeybusinessimages.jpg
// https://i.ibb.co/GMkvTrS/Blue-and-White-Modern-Professional-Corporate-Education-Presentation-7-86211e28be.jpg
{
  /* <Link to={"/categorie/Sports"} className=" cursor-pointer">
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
        </Link> */
}
