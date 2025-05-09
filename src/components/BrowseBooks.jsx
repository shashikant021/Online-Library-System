import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fiction",
  "Fantasy",
  "Romance",
];

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.list);
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  function handleSearch() {
    console.log(searchText);
    const filterBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("filtered Books ;", filterBooks);
    setFilteredBooks(filterBooks);
  }

  return (
    <>
      <h2 className="text-center font-bold my-4 p-5 text-3xl text-shadow-lg">
        Browse Books
      </h2>

      {/* //Search Bar  */}
      <div className="flex justify-center items-center gap-5 mb-5">
        <h3 className="font-bold text-xl">Search Books</h3>
        <input
          type="text"
          name=""
          className="w-[30%] border rounded-md p-1 text-black"
          placeholder="Enter a title/author of Book to Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-zinc-600 hover:bg-zinc-800 text-white px-5 py-1 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Grouped by Category */}
      {categories.map((category) => {
        const booksInCategory = filteredBooks.filter(
          (book) => book.category?.toLowerCase() === category.toLowerCase()
        );

        if (booksInCategory.length === 0) {
          return null;
        }

        return (
          <div key={category} className="mb-10">
            <h2 className="text-2xl text-center font-bold mb-4 px-5">
              {category}
            </h2>
            <div className="grid grid-cols-4 gap-6 px-5">
              {booksInCategory.map((book) => (
                <div
                  key={books.id}
                  className=" m-2 rounded-2xl p-2 shadow-2xl hover:scale-98 transition duration-200 ease-in"
                >
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-62"
                  />
                  <h2 className="font-bold text-center">{book.title}</h2>
                  <div className="flex justify-between">
                    <h3 className="text-zinc-800 my-2">by: {book.author}</h3>
                    <h3 className="text-zinc-800 my-2">
                      Rating: {book.rating}
                    </h3>
                  </div>
                  <p className="mx-1 mb-5">
                    {book.description.split(" ").slice(0, 10).join(" ")}...
                  </p>
                  <Link to={`/book-details/${book.id}`}>
                    <button className="w-full bg-zinc-600 hover:bg-zinc-800 text-white rounded-md mb-5 py-1 px-4 ">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* No Books Fallback */}
      {books.length === 0 && (
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold mb-2">No Books Available</h1>
          <p>
            Add a Book from{" "}
            <Link to="/add-books" className="text-blue-400 underline">
              Add Book
            </Link>
          </p>
        </div>
      )}
      <hr className="mb-30 text-white" />
    </>
  );
};
export default BrowseBooks;
