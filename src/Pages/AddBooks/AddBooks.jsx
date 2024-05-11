import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import img from "../../assets/addbooks.svg";
import axios from "axios";
import toast from "react-hot-toast";
const AddBooks = () => {
  const [bookData, setBookData] = useState({
    image: "",
    name: "",
    quantity: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://book-zone-server.vercel.app/addbooks",
        { bookData },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Book added successfully");
          setBookData({
            image: "",
            name: "",
            quantity: "",
            author: "",
            category: "",
            description: "",
            rating: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen md:px-20 px-5">
      <div className="container m-auto  grid grid-cols-3 rounded-3xl bg-gradient-to-b from-[#9e24b2] to-[#4724b2]">
        <div className="md:col-span-2 col-span-3 p-[2px] ">
          <div className="bg-white md:p-10 p-5 rounded-3xl">
            <Typography variant="h4" gutterBottom>
              Add Book
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Image URL"
                name="image"
                required
                value={bookData.image}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                required
                name="name"
                value={bookData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Quantity"
                name="quantity"
                required
                type="number"
                value={bookData.quantity}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Author"
                required
                name="author"
                value={bookData.author}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  required
                  value={bookData.category}
                  onChange={handleChange}
                >
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Computers">Computers</MenuItem>
                  <MenuItem value="Home & Garden">Home & Garden</MenuItem>
                  <MenuItem value="History">History</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Medical">Medical</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Short Description"
                required
                name="description"
                value={bookData.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                label="Rating"
                name="rating"
                required
                type="number"
                value={bookData.rating}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Button text={"Add Book"}></Button>
            </form>
          </div>
        </div>
        <div className="md:col-span-1 md:block hidden ">
          <div className="h-full">
            <div className="flex justify-between  flex-col h-full">
              <div>
                {" "}
                <h1 className="text-4xl text-white font-bold mt-10 text-center">
                  Add your book
                </h1>
                <p className="text-white text-xl mt-3 pl-5">
                  Ready to add a new book to our collection? Fill in the details
                  below, and let's expand our library together! Your
                  contribution is appreciated.
                </p>
              </div>
              <img className="mb-10 p-10" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
