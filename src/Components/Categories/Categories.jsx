import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoriesOfEveryBooks, setCategoriesOfEveryBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://book-zone-server.vercel.app/categories")
      .then((res) => setCategoriesOfEveryBooks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="min-h-screen p-3">
      <div className="  md:text-5xl text-2xl container m-auto dark:text-white text-black duration-500 font-bold md:py-10 py-5 border-l-8 pl-4 border-[#4724b2]">
        Our Books Categories
      </div>
      <div className=" mt-4  grid md:grid-cols-2 grid-cols-1 w-full gap-5 ">
        {categoriesOfEveryBooks.map((categorie, i) => (
          <Link
            to={`/categorie/${categorie.category}`}
            key={i}
            className="h-44 w-full md:px-20 px-5"
          >
            <div className="h-full w-full overflow-hidden flex justify-between bg-white  rounded-3xl relative">
              <div className="h-full w-full absolute  hover:bg-[#2c2b2b67] duration-500  d pl-10  flex items-start pt-5 text-white font-bold ">
                <p className="bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase px-3 py-1 rounded-full">
                  {categorie.category}
                </p>
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 rounded-l-xl"
                style={{
                  backgroundImage: `url(${categorie.images[2]})`,
                }}
              >
                {" "}
              </div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 "
                style={{
                  backgroundImage: `url(${categorie.images[1]})`,
                }}
              ></div>
              <div
                className="bg-center bg-cover bg-no-repeat h-full w-1/3 rounded-r-3xl"
                style={{
                  backgroundImage: `url(${categorie.images[0]})`,
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
