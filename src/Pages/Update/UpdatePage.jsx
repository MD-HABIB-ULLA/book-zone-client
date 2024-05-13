import {  Typography } from "@mui/material";
import React from "react";
import img from "../../assets/addbooks.svg";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Button from "../../Components/Button/Button";
// import Rating from "react-rating";

const UpdatePage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const data = useLoaderData();

  // Set the initial values for the form fields
  React.useEffect(() => {
    if (data) {
      const { image, name, author, category, rating } = data.bookData;
      setValue("image", image);
      setValue("name", name);
      setValue("author", author);
      setValue("category", category);
      setValue("rating", rating);
    }
  }, [data, setValue]);

  const onSubmit = (formData) => {
    // Handle form submission logic here
    console.log(formData);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="image" className="block font-bold mb-2">
                  Book Image
                </label>
                <input
                  id="image"
                  type="text"
                  {...register("image")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Book Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block font-bold mb-2">
                  Author Name
                </label>
                <input
                  id="author"
                  type="text"
                  {...register("author")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2  text-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block font-bold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  {...register("category")}
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
                  id="rating"
                  type="number"
                  {...register("rating")}
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
              >
             
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
