import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fiction",
  "Fantasy",
  "Romance",
];

function Home() {
  const books = useSelector((state) => state.books.list);

  const popularBooks = books.slice(-4).reverse();

  return (
    <>
      <div className=" p-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-shadow-lg">
          Welcome to Book Library
        </h1>
        <p className="text-center mb-10 text-lg">
          Explore books by category or browse our popular selections!
        </p>

        {/* Book Categories */}
        <div className="text-center p-5">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="flex justify-center items-center flex-wrap gap-10 mb-4">
            {categories.map((category, index) => (
              <Link
                to={`/books/${category.toLowerCase()}`}
                key={index}
                className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg text-white"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Books */}
        <h2 className="text-2xl font-bold mb-4 text-center p-5">
          Popular Books
        </h2>
        <div>
          {popularBooks.length === 0 ? (
            <div className="text-center m-10 p-10 ">
              <p className=" text-xl font-semibold mb-4">No Books Added Yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-4">
              {popularBooks.map((book) => (
                <div
                  key={book.id}
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
          )}
        </div>
        <hr className="mb-12 text-white" />
      </div>
    </>
  );
}
export default Home;
