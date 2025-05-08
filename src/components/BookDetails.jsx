import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="text-center p-10 text-2xl font-bold text-red-500">
        Book not found.
      </div>
    );
  }
  return (
    <>
    <h1 className="text-center m-5 p-5 text-2xl underline "><em>{`Book Details with id: ${id}`}</em></h1>
      <div className="m-10 bg-zinc-100 text-black rounded-xl shadow-xl p-6 flex">
        <img
          src={book.image}
          alt={book.title}
          className="w-auto h-auto object-cover rounded mb-4"
        />
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">{book.title}</h2>
          <p className="mb-2 text-lg">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="mb-2 text-lg">
            <strong>Description:</strong> {book.description}
          </p>
          <p className="mb-4 text-lg">
            <strong>Rating:</strong> {book.rating || "N/A"}
          </p>

          <div className="text-center">
            <Link to="/browse-books">
              <button className="bg-zinc-600 hover:bg-zinc-800 text-white px-6 py-2 rounded-md">
                Back to Browse
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookDetails;
