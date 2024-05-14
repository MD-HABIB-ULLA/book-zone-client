import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  const [bookData, setBookData] = useState([]);
  const { user } = useContext(AuthContext);
  const { email } = user;

  //   console.log(email);
  useEffect(() => {
    axios
      .get(`https://book-zone-server.vercel.app/borrowedBooks/${email}`)
      .then((res) => setBookData(res.data))
      .catch((err) => console.log(err));
  }, [email]);

  const handleReturnBook = (book) => {
    const bookId = book._id;
    const updataId = book.book._id;
    console.log(updataId);
    const returnBook = bookData.filter((book) => book._id !== bookId);
    axios
      .delete(`https://book-zone-server.vercel.app/returnBook/${bookId}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          axios
            .post(
              `https://book-zone-server.vercel.app/returnBookQuantity/${updataId}`
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
    <div className="flex flex-wrap flex-col items-center mt-20 min-h-screen">
      {bookData.map((book) => (
        <div
          key={book._id}
          className="w-[500px] items-center mx-2 mb-4 bg-white shadow-md rounded-lg overflow-hidden flex flex-row"
        >
          <img
            src={book.book.bookData.image}
            alt={book.book.bookData.name}
            className=" h-48 w-36"
          />
          <div className="p-4 flex-1">
            <p className="text-xl font-semibold">{book.book.bookData.name}</p>
            <p className="text-gray-600">{book.book.bookData.category}</p>
            <p className="text-gray-600">Borrowed Date: {book.todayDate}</p>
            <p className="text-gray-600">Return Date: {book.returnDate}</p>
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
  );
};

export default BorrowedBooks;
