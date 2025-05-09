import { createSlice } from "@reduxjs/toolkit";

const hardcodedBooks = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. The novel is set in the Jazz Age on Long Island, near New York City, and depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan. The novel presents a critical portrait of the American dream through its portrayal of the 1920s New York elite, exploring themes of wealth, class, love, and idealism.`,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    rating: 4.5,
    category: "Fiction",
  }, ////Hardcoded Data
  {
    id: "2",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description:
      "An overview of cosmology from the Big Bang to black holes. Hawking writes in non-technical terms about the structure, origin, development and eventual fate of the universe. He talks about basic concepts like space and time, building blocks that make up the universe (such as quarks) and the fundamental forces that govern it (such as gravity). He discusses two theories, general relativity and quantum mechanics that form the foundation of modern physics. Finally, he talks about the search for a unified theory that describes everything in the universe in consistently.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    rating: 4.8,
    category: "Non-Fiction",
  }, ////Hardcoded Data
  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    description:
      "The Pragmatic Programmer: From Journeyman to Master is a book about computer programming and software engineering, written by Andrew Hunt and David Thomas and published in October 1999.[1][2][3] It is used as a textbook in related university courses.[4] It was the first in a series of books under the label The Pragmatic Bookshelf. A second edition, The Pragmatic Programmer: Your Journey to Mastery was released in 2019 for the book's 20th anniversary, with major revisions and new material which reflects new technology and other changes in the software engineering industry over the last twenty years",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    rating: 4.7,
    category: "Fantasy",
  }, ////Hardcoded Data
  {
    id: "4",
    title: "The Echo Wife Hardcover",
    author: " Sarah Gailey",
    description:
      "Sarah Gailey's The Echo Wife is “a trippy domestic thriller which takes the extramarital affair trope in some intriguingly weird new directions.”--Entertainment Weekly\n\nI’m embarrassed, still, by how long it took me to notice. Everything was right there in the open, right there in front of me, but it still took me so long to see the person I had married.\n\nIt took me so long to hate him.\n\nMartine is a genetically cloned replica made from Evelyn Caldwell’s award-winning research. She’s patient and gentle and obedient. She’s everything Evelyn swore she’d never be.",
    image: "https://m.media-amazon.com/images/I/810MVy3iDPL._SY385_.jpg",
    rating: "4",
    category: "Sci-Fiction",
  }, ////Hardcoded Data
];

const loadUserBooks = () => {
  const saved = localStorage.getItem("userBooks");
  return saved ? JSON.parse(saved) : [];
}; ////fetch the data from the localStorage.

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: [...hardcodedBooks, ...loadUserBooks()],
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.list.push(newBook);

      const userBooks = loadUserBooks(); // only store user Books
      userBooks.push(newBook);
      localStorage.setItem("userBooks", JSON.stringify(userBooks));
    },
  },
  // localStorage.removeItem("books"); // to clear the data from browser
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
