import { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Category = () => {
  // const [booksData, setBookData] = useState([]);
  const booksData = useLoaderData();
  // console.log()

  // useEffect(() => {
  //   setBookData(categoryBasedBooks);
  // }, [categoryBasedBooks]);
  console

  return (
    <div className="min-h-screen px-10">
       <div className="text-center text-3xl font-bold dark:text-white py-10">{booksData[1].bookData.category}</div>
      <div
        className={`grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 container m-auto`}
      >
       
        {booksData.map((book, i) => (
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
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-full">
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
                  emptySymbol={<FaRegStar className="text-yellow-500 mr-1" />}
                  fullSymbol={<FaStar className="text-yellow-500 mr-1" />}
                  initialRating={book.bookData.rating}
                  readonly
                />
              </p>
              <Button text={"Update"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
