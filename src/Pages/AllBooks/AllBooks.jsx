import axios from "axios";
import { TfiWrite } from "react-icons/tfi";
import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { CiViewTable } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
const AllBooks = () => {
  const [booksData, setBookData] = useState([]);
  const [laading, setLoading] = useState(true);
  const [formet, setFormet] = useState("card");
  const [booksValue, setBooksValue] = useState("all");

  // console.log(totalcount)
  const selectedOption = (e) => {
    // console.log(e.target.value)
    setBooksValue(e.target.value);
    // if (e.target.value === "all") {
    //   console.log(booksValue);
    // } else {
    //   console.log(booksValue);
    // }
  };
  console.log(booksValue);
  useEffect(() => {
    if (booksValue === "all") {
      axios
        .get("https://book-zone-server.vercel.app/books", {
          withCredentials: true,
        })
        .then((res) => {
          setLoading(false);
          setBookData(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get("https://book-zone-server.vercel.app/quantity", {
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
    <div className="container m-auto ">
      <div className="min-h-screen px-4">
        {/* filter button  */}

        <div className="bg-[#2c292952] flex justify-between dark:bg-[#afa9a952] rounded-lg px-6 py-5 mb-10">
          <div className="flex items-center dark:text-white text-black font-bold">
            {" "}
            Showing {booksData.length} result
          </div>
          <div className="relative inline-block mx-4">
            <select
              className="bg-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-full appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
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
        {laading ? (
          ""
        ) : (
          <>
            <div
              className={`grid lg:grid-cols-2 grid-cols-1 p-1 gap-5 ${
                formet === "card" ? "block" : " hidden"
              }`}
            >
              {booksData.map((book, i) => (
                <div
                  key={i}
                  className=" flex  items-center   bg-white border duration-500 border-gray-200 rounded-lg shadow flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 h-64 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover rounded-t-lg w-40 md:w-52 md:rounded-none md:rounded-l-lg"
                    src={book.bookData.image}
                    alt=""
                    style={{ aspectRatio: "9/10" }} // Set the desired aspect ratio here
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

            {/*  table data  */}
            <div
              className={`overflow-x-auto ${
                formet === "table" ? "block" : " hidden"
              }`}
            >
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-3">
                      Image
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-2">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-3">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-3">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-3">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:px-3">
                      Rating
                    </th>
                    <th className="px-6 py-3 md:px-3"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y-8 dark:divide-[#212121] dark:bg-gray-700">
                  {booksData.map((book, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 md:table-row md:flex md:flex-col md:items-center"
                    >
                      <td className="py-2 whitespace-nowrap md:py-4 md:px-3">
                        <img
                          className="w-36 h-24 object-cover rounded-lg md:w-full md:h-auto"
                          src={book.bookData.image}
                          alt=""
                        />
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap md:py-2 md:px-3">
                        {book.bookData.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap md:py-2 md:px-3">
                        {book.bookData.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap md:py-2 md:px-3">
                        {book.bookData.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap md:py-2 md:px-3">
                        {book.bookData.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap md:py-2 md:px-3">
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
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap md:py-2 md:px-3">
                        <Button text={"Update"} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
