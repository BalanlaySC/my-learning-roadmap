import React from 'react';

interface ReviewFormProps {
  userName: string;
  setUserName: (name: string) => void;
  rating: number;
  setRating: (rating: number) => void;
  reviewText: string;
  setReviewText: (text: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  userName,
  setUserName,
  rating,
  setRating,
  reviewText,
  setReviewText,
  onSubmit,
}) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-bold text-white mb-4">Submit Your Review</h3>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-slate-300 mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-slate-700 text-white p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-slate-300 mb-1">Rating (1-5 ★)</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min="1"
              max="5"
              className="w-full bg-slate-700 text-white p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="reviewText" className="block text-slate-300 mb-1">Review</label>
            <textarea
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={3} // Set a default height of 3 rows
              className="w-full bg-slate-700 text-white p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <button type="submit" className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;