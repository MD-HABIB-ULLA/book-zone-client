import { Typography } from "@mui/material";
import img from "../../assets/addbooks.svg";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useEffect, useState } from "react";

const UpdatePage = () => {
  const axiosPublic = UseAxiosPublic();
  const { id } = useParams();
  const [data, setBook] = useState(null);

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
  console.log(data, id)
 console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const author = form.author.value;
    const image = form.image.value;
    const category = form.category.value;
    const rating = parseFloat(form.rating.value);
    const formData = { name, author, image, category, rating };
    console.log(formData)
    axiosPublic
      .put(`/update/${data._id}`, formData)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Update successful ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen md:px-20 px-5">
      <div className="container m-auto  grid grid-cols-3 rounded-3xl bg-gradient-to-b from-[#9e24b2] to-[#4724b2]">
        <div className="md:col-span-1 md:block hidden ">
          <div className="h-full">
            <div className="flex justify-between  flex-col h-full">
              <div>
                {" "}
                <h1 className="text-4xl text-white font-bold mt-10 text-center">
                  Update your book
                </h1>
                <p className="text-white text-xl mt-3 pl-5">
                  The UpdatePage component serves as a user interface for
                  updating book details. It allows users to modify information
                  such as the books image, name, author, category, and rating.
                </p>
              </div>
              <img className="mb-10 p-10" src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-3 p-[2px] ">
          <div className="bg-white md:p-10 p-5 rounded-3xl">
            <Typography variant="h4" gutterBottom>
              Upadate book
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-4">
                <label htmlFor="image" className="block font-bold mb-2">
                  Book Image
                </label>
                <input
                  name="image"
                  type="text"
                  defaultValue={data?.bookData.image}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Book Name
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={data?.bookData.name}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block font-bold mb-2">
                  Author Name
                </label>
                <input
                  name="author"
                  defaultValue={data?.bookData.author}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-bold mb-2">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={data?.bookData.category}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                >
                  <option value="Entertainment">Entertainment</option>
                  <option value="Computers">Computers</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="History">History</option>
                  <option value="Sports">Sports</option>
                  <option value="Medical">Medical</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block font-bold mb-2">
                  Rating
                </label>
                <input
                  name="rating"
                  defaultValue={data?.bookData.rating}
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <Button
                text={"Update"}
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              ></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
