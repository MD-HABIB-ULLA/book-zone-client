import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
const BookDetails = () => {
  const axiosPublic = UseAxiosPublic();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the book data!", error);
      });
  }, [axiosPublic, id]);
  const { user } = useContext(AuthContext);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const year = today.getFullYear();
  console.log(user.email);
  const [returnDate, setReturnDate] = useState(new Date());
  const [quantity, setQuantity] = useState(book?.bookData.quantity);
  console.log(quantity);
  const handleSubmit = (e, book) => {
    e.preventDefault();
    const bookId = book._id;
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const returnDate = form.returnDate.value;
    const todayDate = `${month}/${day}/${year}`;
    const borrowingData = { name, email, returnDate, todayDate, book, bookId };
    const incrementBookQuantity = bookId;
    console.log(incrementBookQuantity);
    console.log(borrowingData);

    axiosPublic
      .post("/addBorrowBook", borrowingData)
      .then((res) => {
        if (res.data.acknowledged) {
          setQuantity(quantity - 1);
          axiosPublic
            .post(`/updatequantity/${incrementBookQuantity}`, {
              incrementBookQuantity,
            })
            .then((res) => {
              console.log(res.data);
              toast.success(" This book added to the borrowed list.");
              document.getElementById("my_modal_3").close();
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        if (
          err.response.data.message ===
          "Duplicate document: This book has already been borrowed."
        ) {
          toast.error(" This book has already been borrowed.");
          document.getElementById("my_modal_3").close();
        }
        console.log(err.response.data);
      });
  };
// git add . 
// git commit -m "updated "
// git push
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8 p-8  dark:text-white">
      <div className="md:w-1/3">
        <img
          src={book?.bookData.image}
          alt="Project Management for the 21st Century"
          className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          {book?.bookData.name}
        </h1>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Author:</span> {book?.bookData.author}
        </p>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Category:</span> {book?.bookData.category}
        </p>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Quantity:</span> {quantity}
        </p>
        <div className="mb-4">
          <span className="font-bold">Rating:</span>
          <Rating
            emptySymbol={
              <FaRegStar className="text-yellow-500 mr-1 dark:text-yellow-400" />
            }
            fullSymbol={
              <FaStar className="text-yellow-500 mr-1 dark:text-yellow-400" />
            }
            initialRating={book?.bookData.rating}
            readonly
          />
        </div>
        <p className="dark:text-gray-400">{book?.bookData.description}</p>
        <div className="mt-10">
          <button
            type="submit"
            disabled={quantity === 0 ? true : false}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className={`${
              parseInt(book?.bookData.quantity) === 0
                ? "bg-yellow-500 cursor-not-allowed !important"
                : "bg-gradient-to-r from-[#9e24b2] to-[#4724b2]"
            } text-white font-bold border-none btn uppercase`}
          >
            Borrow
          </button>
          <dialog id="my_modal_3" className="modal  dark:text-black">
            <div className="modal-box dark:bg-[#8380807e]  dark:text-white py-20">
              <form method="dialog">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("my_modal_3").close();
                  }}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <form
                onSubmit={(e) => handleSubmit(e, book)}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-bold dark:text-white">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                    className="border border-gray-300 px-3 py-2 rounded-md text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-bold dark:text-white">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    readOnly
                    className="border border-gray-300 px-3 py-2 rounded-md text-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="returnDate"
                    className="font-bold dark:text-white"
                  >
                    Return Date:
                  </label>
                  <DatePicker
                    name="returnDate"
                    selected={returnDate}
                    onChange={setReturnDate}
                    className="border border-gray-300 px-3 py-2 rounded-md text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-900"
                >
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
