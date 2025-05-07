import { useState } from "react";
import { books } from "../utils/bookData";

function AddBooks({onBookAdded}) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...formData };
    books.push(newBook);
    onBookAdded(newBook);
    setFormData({ image: "", title: "", author: "", description: "" });
  };

  return (
    <>
      <div className="bg-zinc-600 text-white h-auto w-[40%] m-auto mt-10 rounded-xl shadow-2xl">
        <h1 className="font-bold text-3xl text-center mb-5 p-3 text-shadow-lg">
          Add a New Book Details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center px-10"
        >
          <label htmlFor="" className="">
            Book Image:
          </label>
          <input
            type="text"
            value={formData.image}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-5 text-black"
            name="image"
            placeholder="Image Url"
          />
          <label htmlFor="">Book Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-5 text-black"
            name="title"
            placeholder="Enter Book Title"
          />
          <label htmlFor="">Book Author</label>
          <input
            type="text"
            value={formData.author}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-5 text-black"
            name="author"
            placeholder="Enter Book Author"
          />
          <label htmlFor="">Book Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-5 text-black"
            cols="30"
            rows="8"
            placeholder="Enter Book Description"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 font-bold rounded-lg p-1 mb-5 hover:bg-blue-900"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default AddBooks;
