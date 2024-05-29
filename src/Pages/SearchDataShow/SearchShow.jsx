import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SearchShow = () => {
  const { searchData } = useContext(AuthContext);
  console.log(searchData);
  return (
    <div className="min-h-screen">
      {searchData ? (
        <div className=" mt-4  grid grid-cols-2 w-full gap-5 ">
          {searchData?.map((categorie, i) => (
            <Link
              to={`/categorie/${categorie.category}`}
              key={i}
              className="h-44 w-full md:px-20 px-5"
            >
              <div className="h-full w-full overflow-hidden flex justify-between bg-white  rounded-3xl relative">
                <div className="h-full w-full absolute  hover:bg-[#2c2b2b67] duration-500   md:pl-10 pl-2  flex items-start md:pt-5 pt-2 text-white font-bold ">
                  <p className="text-sm bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase px-3 py-1 rounded-full">
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
      ) : (
        <div className="flex h-full items-center justify-center text-5xl">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default SearchShow;
