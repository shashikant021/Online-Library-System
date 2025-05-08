import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/booksSlice";

function AddBooks() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }
    if (!formData.rating.trim()) {
      newErrors.rating = "Rating is required";
    }
    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addBook(formData));
      navigate("/browse-books");
    }
  };

  // console.log(formData);

  return (
    <>
      <div className="bg-zinc-600 text-white h-auto w-[40%] m-auto mt-2 rounded-xl shadow-2xl">
        <h1 className="font-bold text-3xl text-center mb-1 p-3 text-shadow-lg">
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
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            name="image"
            placeholder="Image Url"
          />
          {errors.image && (
            <p className="text-red-400 text-sm">{errors.image}</p>
          )}
          <label htmlFor="">Book Title:</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            name="title"
            placeholder="Enter Book Title"
          />
          {errors.title && (
            <p className="text-red-400 text-sm">{errors.title}</p>
          )}

          <label htmlFor="">Book Author:</label>
          <input
            type="text"
            value={formData.author}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            name="author"
            placeholder="Enter Book Author"
          />
          {errors.author && (
            <p className="text-red-400 text-sm">{errors.author}</p>
          )}
          <label htmlFor="">Book Rating:</label>
          <input
            type="text"
            value={formData.rating}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            name="rating"
            placeholder="Enter Book Rating"
          />
          {errors.rating && (
            <p className="text-red-400 text-sm">{errors.rating}</p>
          )}
          <label htmlFor="">Book Category:</label>
          <input
            type="text"
            value={formData.category}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            name="category"
            placeholder="Enter Book Category"
          />
          {errors.category && (
            <p className="text-red-400 text-sm">{errors.category}</p>
          )}

          <label htmlFor="">Book Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className=" w-full bg-white rounded-md p-1 mb-3 text-black"
            cols="30"
            rows="3"
            placeholder="Enter Book Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-400 text-sm">{errors.description}</p>
          )}

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
