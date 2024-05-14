import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const BorrowedBooks = () => {
  const [bookData, setBookData] = useState([]);
  const { user } = useContext(AuthContext);
  const { email } = user;

  //   console.log(email);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/borrowedBooks/${email}`)
      .then((res) => setBookData(res.data));
  }, [email]);
  return (
    <div className="flex flex-wrap flex-col items-center justify-center">
      {bookData.map((book) => (
        <div
          key={book._id}
          className="w-[500px] items-center mx-2 mb-4 bg-white shadow-md rounded-lg overflow-hidden flex flex-row"
        >
          <img
            src={book.book.bookData.image}
            alt={book.book.bookData.name}
            className=" h-48 "
          />
          <div className="p-4 flex-1">
            <p className="text-xl font-semibold">{book.book.bookData.name}</p>
            <p className="text-gray-600">{book.book.bookData.category}</p>
            <p className="text-gray-600">Borrowed Date: {book.todayDate}</p>
            <p className="text-gray-600">Return Date: {book.returnDate}</p>
            <button
              //   onClick={() => handleReturnBook(book._id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
