import { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [formData, setFormData] = useState({ title: '', text: '', rating: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    setFormStatus('Review added successfully!');
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({ title: '', text: '', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-black">Add a Review</h2>
      
      <div className="form-group mt-4">
        <label className="label text-black">Review</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
          className="textarea textarea-bordered bg-white border-black w-full"
        />
      </div>
      <div className="form-group mt-4">
        <label className="label text-black">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          className="input input-bordered bg-white border-black w-full"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-4 w-full">Submit</button>
      {formStatus && <p className="text-green-500 mt-4">{formStatus}</p>}
    </form>
  );
};

export default ReviewForm;
