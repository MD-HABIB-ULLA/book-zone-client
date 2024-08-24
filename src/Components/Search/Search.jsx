import { useState } from "react";
import { FaRegStar, FaSearch, FaStar } from "react-icons/fa";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Search = () => {
  const axiosPublic = UseAxiosPublic()
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axiosPublic.post(
        "/search",
        {
          query: query,
        }
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value > 2) {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-end w-full px-10">
        <label className="input input-bordered flex items-center gap-2 rounded-full active:outline-white focus:border-white outline-white bg-transparent border-[1px] dark:border-white">
          <input
            type="text"
            value={query}
            name="search"
            onChange={handleChange}
            className="dark:text-white bg-transparent"
            placeholder="Search books..."
          />
          <button className="" type="button" onClick={handleSearch}>
            <FaSearch className="dark:text-white" />
          </button>
        </label>
      </div>

      <div className="mt-10">
        {results.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 container m-auto">
            {results.map((book, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-white border duration-500 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
              >
                <div className="p-1 rounded-lg">
                  <img
                    className=" rounded-t-lg  h-48"
                    src={book.bookData.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal h-full w-full">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.bookData.name}
                  </h5>
                  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-full">
                    <div className="flex items-center gap-2">
                      <TfiWrite className="text-xl dark:text-white text-black font-bold" />{" "}
                      {book.bookData.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">Category :</p>{" "}
                      {book.bookData.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">Quantity :</p>{" "}
                      {book.bookData.quantity}
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
                  <Link to={`/books/${book._id}`}>
                    {" "}
                    <Button text={"See Details"} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            <p className="text-white">No data found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
