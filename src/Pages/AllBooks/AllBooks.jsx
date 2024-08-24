import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { CiViewTable } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
const AllBooks = () => {
  const [booksData, setBookData] = useState([]);
  const axiosPublic = UseAxiosPublic();

  const [loading1, setLoading] = useState(true);
  const [formet, setFormet] = useState("card");
  const [booksValue, setBooksValue] = useState("all");


  const selectedOption = (e) => {
    setBooksValue(e.target.value);
  
  };
  console.log(booksValue);
  useEffect(() => {
    if (booksValue === "all") {
      axiosPublic
        .get("/books", {
          withCredentials: true,
        })
        .then((res) => {
          setLoading(false);
          setBookData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axiosPublic
        .get("/quantity", {
          withCredentials: true,
        })
        .then((res) => {
          setLoading(false);
          setBookData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [booksValue]);

  return (
    <div className="max-w-7xl md:px-10 px-5 m-auto ">
      <div className="min-h-screen ">
        {/* filter button  */}

        <div className="bg-[#7224b2]/5 flex justify-between dark:bg-[#afa9a952]/15 rounded-lg px-6 py-5 mb-10">
          <div className="flex items-center dark:text-white text-black font-bold">
            {" "}
            Showing {booksData.length} result
          </div>
          <div className="relative inline-block mx-4">
            <select
              className="md:w-72 text-gray-700 py-2 px-4 pr-8 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
              // value={selectedOption}
              defaultValue={"all"}
              onChange={(e) => selectedOption(e)}
            >
              <option value="all">All Books </option>
              <option value="available">Available Books</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center px-3 py-2 text-3xl bg-gradient-to-r from-[#9e24b2] to-[#4724b2] rounded-full">
            <CiViewTable
              onClick={() => setFormet("table")}
              className={`cursor-pointer border-r pr-2 font-bold ${
                formet === "table" ? "text-info" : "text-white"
              }`}
            />

            <CiCreditCard1
              onClick={() => setFormet("card")}
              className={`cursor-pointer pl-2 font-bold ${
                formet === "card" ? "text-info" : "text-white"
              }`}
            />
          </div>
        </div>

        {/* showing data  */}
        {loading1 ? (
          <div className="text-center min-h-screen flex items-center justify-center text-6xl">
            <span className="loading dark:bg-white bg-black loading-spinner loading-lg m-auto"></span>
          </div>
        ) : (
          <>
            <div
              className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-1 gap-3 ${
                formet === "card" ? "block" : " hidden"
              }`}
            >
              {booksData.map((book, i) => (
                <Link
                  to={`/books/${book._id}`}
                  key={i}
                  className=" flex gap-2 flex-col justify-between bg-[#7224b2]/10  items-center p-4 hover:border-[#7224b2] hover:translate-y-1 border    duration-500 border-gray-200 rounded-lg shadow  md:max-w-xl     "
                >
                  <div className="h-full cursor-pointer">
                    {" "}
                    <img
                      className="object-cover  rounded-lg w-28 h-40  md:rounded-lg"
                      src={book.bookData.image}
                      alt=""
                      style={{ aspectRatio: "9/10" }} // Set the desired aspect ratio here
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between  leading-normal h-full w-full ">
                    <h5 className="mb-2 md:text-xl text-base font-bold text-center tracking-tight text-gray-900 dark:text-white">
                      {book.bookData.name}
                    </h5>
                    <div className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400  h-full">
                      <div className=" md:text-sm text-xs  ">
                        {book.bookData.author}
                      </div>

                      <Rating
                        emptySymbol={
                          <FaRegStar className="text-yellow-500 mr-1" />
                        }
                        fullSymbol={<FaStar className="text-yellow-500 mr-1" />}
                        initialRating={book.bookData.rating}
                        readonly
                      />
                    </div>
                    {/* <Link
                      to={`/update/${book._id}`}
                      className=" text-white font-bold border-none btn bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase"
                    >
                      {" "}
                      Update
                    </Link> */}
                  </div>
                </Link>
              ))}
            </div>

            {/*  table data  */}
          </>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default AllBooks;
