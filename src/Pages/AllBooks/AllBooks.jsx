import axios from "axios";
import { TfiWrite } from "react-icons/tfi";
import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const AllBooks = () => {
  const [booksData, setBookData] = useState([]);
  const [laading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://book-zone-server.vercel.app/books", {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        setBookData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container m-auto ">
      <div className="min-h-screen">
        {laading ? (
          ""
        ) : (
          <div className=" grid lg:grid-cols-2 grid-cols-1 p-1 gap-5">
            {booksData.map((book, i) => (
              <div
                key={i}
                className=" flex  items-center   bg-white border border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover  rounded-t-lg w-40 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="https://i.thriftbooks.com/api/imagehandler/m/AB1A548B86791355FA95F5BA0A3C0BB481DE12F8.jpeg"
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal h-full w-full ">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.bookData.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400  h-full">
                    <div className="flex items-center gap-4">
                      <TfiWrite className="text-xl dark:text-white text-black font-bold" />{" "}
                      {book.bookData.author}
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold">Category :</p>
                      {book.bookData.category}
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold">Quantity :</p>
                      {book.bookData.quantity}
                    </div>
                    <Rating
                      emptySymbol={
                        <FaRegStar className="text-yellow-500 mr-1" />
                      }
                      fullSymbol={
                        <FaStar className="text-yellow-500 mr-1" />
                      }
                      initialRating={book.bookData.rating}
                      readonly
                    />
                    
                   
                  </p>
                  <Button text={"See Details"} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
