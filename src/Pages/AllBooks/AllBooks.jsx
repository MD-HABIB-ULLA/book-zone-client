import axios from "axios";

const AllBooks = () => {
  axios
    .get("https://book-zone-server.vercel.app/books", { withCredentials: true })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  return <div>this is all book route</div>;
};

export default AllBooks;
