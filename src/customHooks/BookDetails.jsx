// src/components/BookDetails.jsx
import  { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import bookImg from '../assets/book-img.jpg';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const reviewFormRef = useRef();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/books/${id}`);
        setBook(response.data);
        setReviews(response.data.reviews || []);
      } catch (error) {
        setError(true);
      }
    };

    fetchBook();
  }, [id]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  if (error) return <p>Error occurred</p>;
  if (!book) return <span className="loading loading-spinner loading-lg items-center"></span>;

  return (

<>
<div className=" bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2] min-h-screen flex justify-center items-center">
      <div className="card card-side shadow-xl w-full max-w-4xl ">
        <figure className="w-full sm:w-1/2">
          <img src={bookImg} alt="book-img" className="h-full w-full object-cover" />
        </figure>
        <div className="card-body w-full sm:w-1/2 p-4">
          <h1 className="text-2xl font-bold text-black">{book.title}</h1>
          <p className="text-black">Author: {book.author}</p>
          <p className="text-black">{book.description}</p>
          <h2 className="text-xl font-bold mt-4 text-black">Reviews</h2>
          <div className="max-h-48 overflow-y-auto">
            {reviews.map((review, index) => (
              <div key={index} className="py-2">
                <p className="text-black">Comment: {review.text}</p>
                <p className="text-black">Rating: {review.rating}</p>
              </div>
            ))}
          </div>
          <ReviewForm addReview={addReview} ref={reviewFormRef} />
        </div>
      </div>
    </div>

    

    </>

  );
};

export default BookDetails;
