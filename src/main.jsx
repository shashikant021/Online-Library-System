import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBooks from "./components/BrowseBooks.jsx";
import AddBooks from "./components/AddBooks.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import BookDetails from "./components/BookDetails.jsx";
import BooksByCategory from "./components/BooksByCategory.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-books",
        element: <AddBooks />,
      },
            {
        path: "/books/:category",
        element: <BooksByCategory />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
