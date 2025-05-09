import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BooksByCategory() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);

  const filtered = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Books in <em className="text-blue-500 ">"{category}"</em> Category
        </h1>

        {filtered.length === 0 ? (
          <p className="text-center m-20 p-20 font-semibold">
            No books found in this category!
          </p>
        ) : (
          <div className="grid grid-cols-3">
            {filtered.map((book) => (
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
                  <h3 className="text-zinc-800 my-2">Rating: {book.rating}</h3>
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
    </>
  );
}
export default BooksByCategory;
