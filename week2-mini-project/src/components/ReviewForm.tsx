import React from 'react';

const ReviewForm = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg mt-8">
      <h3 className="text-2xl font-bold text-white mb-4">Submit Your Review</h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-slate-300 mb-1">Username</label>
            <input
              ref={ref} // The ref is attached to the first field
              type="text"
              id="username"
              className="w-full bg-slate-700 text-white p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-slate-300 mb-1">Rating (1-5 ★)</label>
            <input
              type="number" // Use type="number" for ratings
              id="rating"
              min="1"
              max="5"
              className="w-full bg-slate-700 text-white p-2 rounded-md border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="comment" className="block text-slate-300 mb-1">Comment</label>
            <textarea
              id="comment"
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
});

export default ReviewForm;