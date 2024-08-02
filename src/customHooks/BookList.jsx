// src/components/BookList.jsx

import { Link } from 'react-router-dom';
import Books from './Books';
import bookImg from '../assets/book-img.jpg';

const BookList = () => {
  const { books, loader, error } = Books("https://freetestapi.com/api/v1/books?limit=8");

  if (loader) return <span className="loading loading-spinner loading-lg items-center"></span>;
  if (error) return <p>Error occurred</p>;

  return (
    <div className="  bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2] w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {books.map((elem) => (
          <div className="card card-compact shadow-xl m-5" key={elem.id}>
            <figure className="flex justify-center">
              <img src={bookImg} alt={elem.title} className="w-1/2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black font-bold text-center">{elem.title}</h2>
              <h2 className="card-title font-semibold text-black"> Author: {elem.author} </h2>
              <p className="text-black">Published: {elem.publication_year}</p>
              <p className="text-black"> {elem.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/book/${elem.id}`} className="btn btn-primary w-full">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
