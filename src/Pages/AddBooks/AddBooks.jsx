import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Button from "../../Components/Button/Button";

import img from "../../assets/addbooks.svg";
import axios from "axios";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
const AddBooks = () => {
  const axiosPublic = UseAxiosPublic();


  // submit button function 
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const quantity = parseInt(form.quantity.value);
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const bookData = {
      image,
      name,
      quantity,
      author,
      category,
      description,
      rating,
    };
    axiosPublic
      .post(
        "/addbooks",
        { bookData },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Book added successfully");
          e.target.reset();
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

            {/* form  */}
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                label="Image URL"
                name="image"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                required
                name="name"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Quantity"
                name="quantity"
                required
                type="number"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Author"
                required
                name="author"
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select name="category" required>
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
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                label="Rating"
                name="rating"
                required
                type="text"
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
                  below, and lets expand our library together! Your contribution
                  is appreciated.
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
