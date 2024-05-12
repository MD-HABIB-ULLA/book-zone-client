import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
  const book = useLoaderData()
  console.log(book._id)
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8 p-8  dark:text-white">
      <div className="md:w-1/3">
        <img
          src={book.bookData.image}
          alt="Project Management for the 21st Century"
          className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          {book.bookData.name}
        </h1>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Author:</span> {book.bookData.author}
        </p>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Category:</span> {book.bookData.category}
        </p>
        <p className="mb-4 dark:text-gray-400">
          <span className="font-bold">Quantity:</span> {book.bookData.quantity}
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
            initialRating={book.bookData.rating}
            readonly
          />
        </div>
        <p className="dark:text-gray-400">
        {book.bookData.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;