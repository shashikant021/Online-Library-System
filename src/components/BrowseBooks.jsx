import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

      <div className=" grid grid-cols-4 gap-4 ">
        {books.length === 0 ? (
          <div className=" h-[100px] w-[1200px] text-center m-10 p-10 ">
            <h1 className="text-2xl font-bold mb-4">No Books are Added</h1>
            <p>
              Add a Books from{" "}
              <a
                href="/add-books"
                className="bg-zinc-600 mx-2 px-4 py-1 rounded-md"
              >
                Add Book
              </a>
            </p>
          </div>
        ) : filteredBooks.length === 0 ? (
          <p className=" h-[100px] w-[1200px] text-center m-10 p-10 text-2xl font-bold">
            '0' items present with this filtered text
          </p>
        ) : (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className=" m-2 rounded-2xl p-2 shadow-2xl hover:scale-98 transition duration-200 ease-in"
            >
              <img src={book.image} alt={book.title} className="w-full h-62" />
              <h2 className="font-bold text-center">{book.title}</h2>
              <div className="flex justify-between">
                <h3 className="text-zinc-800 my-2">by: {book.author}</h3>
                <h3 className="text-zinc-800 my-2">Rating: {book.rating}</h3>
              </div>
              <p className="mx-1 mb-5">
                {book.description.split(" ").slice(0, 15).join(" ")}...
              </p>
              <Link to={`/book-details/${book.id}`}>
                <button className="w-full bg-zinc-600 hover:bg-zinc-800 text-white rounded-md mb-5 py-1 px-4 ">
                  View Details
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
      <hr className="mb-30 text-white" />
    </>
  );
};
export default BrowseBooks;
