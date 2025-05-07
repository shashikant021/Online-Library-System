function Header() {
  return (
    <>
      <div className="header bg-zinc-700 p-2 text-white flex justify-between items-center">
        <h1 className="mx-6 font-bold text-2xl text-blue-800 text-shadow-lg">
          Online Library System
        </h1>
        <nav className="navbar mx-8">
          <ul className="nav-list flex gap-6 text-lg">
            <li className="hover:text-blue-800 transition duration-300 ease-in-out">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-blue-800 transition duration-300 ease-in-out">
              <a href="/browse-books">Browse Books</a>
            </li>
            <li className="hover:text-blue-800 transition duration-300 ease-in-out">
              <a href="/add-books">Add Book</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
