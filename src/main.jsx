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

        element: <Category />,
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
        element: <AllBooks />,
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

        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",

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
