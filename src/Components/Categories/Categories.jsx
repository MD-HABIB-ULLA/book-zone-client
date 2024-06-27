import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Categories = () => {
  const [categoriesOfEveryBooks, setCategoriesOfEveryBooks] = useState([]);
  console.log(categoriesOfEveryBooks);
  useEffect(() => {
    axios
      .get("https://book-zone-server.vercel.app/categories")
      .then((res) => setCategoriesOfEveryBooks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen p-3">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"

        data-aos-once="true"
        
        className="  md:text-5xl text-center text-2xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10 py-5 "
      >
        Our Books Categories
      </div>
      <div className=" mt-4  grid grid-cols-2 w-full gap-5 ">
        {categoriesOfEveryBooks.map((categorie, i) => (
          <Link
            to={`/categorie/${categorie.category}`}
            key={i}
            className="h-44 w-full md:px-20 px-5"
          >
            <div className="h-full w-full overflow-hidden flex justify-between bg-white  rounded-lg border dark:border-white border-black relative">
              <div className="h-full w-full absolute  hover:bg-[#2c2b2b67] duration-500   md:pl-10 pl-2  flex items-start md:pt-5 pt-2 text-white font-bold ">
                <p className="text-sm bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase px-3 py-1 rounded-full">
                  {categorie.category}
                </p>
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 rounded-l-lg"
                style={{
                  backgroundImage: `url(${categorie.images[2]})`,
                }}
              >
                {" "}
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 "
                style={{
                  backgroundImage: `url(${categorie.images[0]})`,
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 rounded-r-lg"
                style={{
                  backgroundImage: `url(${categorie.images[1]})`,
                }}
              ></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
