import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const BorrowedBooks = () => {
  const axiosPublic = UseAxiosPublic()
  const [bookData, setBookData] = useState([]);
  const { user } = useContext(AuthContext);
  const { email } = user;

  //   console.log(email);
  useEffect(() => {
    axiosPublic
      .get(`/borrowedBooks/${email}`)
      .then((res) => setBookData(res.data))
      .catch((err) => console.log(err));
  }, [email]);

  const handleReturnBook = (book) => {
    const bookId = book._id;
    const updataId = book.book._id;
    console.log(updataId);
    const returnBook = bookData.filter((book) => book._id !== bookId);
    axios
      .delete(`/returnBook/${bookId}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          axios
            .post(
              `/returnBookQuantity/${updataId}`
            )
            .then((res) => {
              if (res.data.acknowledged) {
                setBookData(returnBook);
                toast.success("Returned the book");
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen max-w-7xl md:px-10 px-5">
      {!bookData ? (
        <div>
          <div className="text-5xl font-bold text-center py-5">
            <h1>Borrowed Books</h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {bookData?.map((book) => (
              <div
                key={book._id}
                className="items-center mx-2 p-3 mb-4 bg-white shadow-md rounded-lg overflow-hidden flex flex-row"
              >
                <div className="w-32 h-full">
                  <img
                    src={book.book.bookData.image}
                    alt={book.book.bookData.name}
                    className="w-full h-full rounded-md object-cover object-center"
                  />
                </div>

                <div className="p-4 flex-1">
                  <p className="text-xl font-semibold">
                    {book.book.bookData.name}
                  </p>
                  <p className="text-gray-600">{book.book.bookData.category}</p>
                  <p className="text-gray-600">
                    Borrowed Date: {book.todayDate}
                  </p>
                  <p className="text-yellow-400 font-bold">
                    Return Date: {book.returnDate}
                  </p>
                  <button
                    onClick={() => handleReturnBook(book)}
                    className="mt-2  text-white font-bold border-none btn bg-gradient-to-r from-[#9e24b2] to-[#4724b2] uppercase"
                  >
                    Return
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="lg:text-5xl md:text-3xl text-xl text-center  h-full mt-2 my-auto text-[#7224b2]">
         
          Please borrow a book first
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
