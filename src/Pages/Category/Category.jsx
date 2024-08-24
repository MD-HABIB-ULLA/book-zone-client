import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const Category = () => {
  const axiosPublic = UseAxiosPublic();
  const { category } = useParams();
  const [booksData, setBook] = useState([]);

  useEffect(() => {
    axiosPublic
      .get(`/category/${category}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the book data!", error);
      });
  }, [axiosPublic, category]);
  console.log(booksData, category)

  
  return (
    <div className="max-w-7xl m-auto  md:px-10 px-5">
      <div className="text-center text-5xl font-bold text-[#7224b2] py-10">
        {booksData[1]?.bookData.category}
      </div>
      <div
        className={`grid lg:grid-cols-4 md:grid-cols-3 gap-5 grid-cols-2 container m-auto`}
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
                className="object-cover  rounded-t-lg w-28 h-40 md:rounded-none md:rounded-l-lg"
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
                  emptySymbol={<FaRegStar className="text-yellow-500 mr-1" />}
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
    </div>
  );
};

export default Category;
