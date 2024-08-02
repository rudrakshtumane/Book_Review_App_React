// src/components/Books.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const Books = (url) => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(url);
      setBooks(response.data);
      setLoader(false);
    } catch (error) {
      setError(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [url]);

  return {
    books,
    loader,
    error,
  };
};

export default Books;
