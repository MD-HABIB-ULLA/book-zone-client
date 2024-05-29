import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SignUp from "./Pages/Resgister/SignUp.jsx";
import PrivateRoute from "./Private/PrivateRoute.jsx";
import AddBooks from "./Pages/AddBooks/AddBooks.jsx";
import AllBooks from "./Pages/AllBooks/AllBooks.jsx";
import BorrowedBooks from "./Pages/BorrowedBooks/BorrowedBooks.jsx";
import Home from "./Pages/Home/Home.jsx";
import Category from "./Pages/Category/Category.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import BookDetails from "./Pages/BookDetails/BookDetails.jsx";
import UpdatePage from "./Pages/Update/UpdatePage.jsx";
// import SearchShow from "./Pages/SearchDataShow/SearchShow.jsx";
import Search from "./Components/Search/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/categorie/:category",
        loader: ({ params }) =>
          fetch(
            `https://book-zone-server.vercel.app/category/${params.category}`
          ),
        element: (
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        loader: ({ params }) =>
          fetch(`https://book-zone-server.vercel.app/books/${params.id}`),
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://book-zone-server.vercel.app/books/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdatePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
