import React, { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);

  const handleRating = (index) => {
    setRating(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, review, name, email, saveDetails });
  };

  return (
    <div className="product-review">
      <h2>4 reviews for Fresh Mango 1Kg</h2>
      <p>There are no reviews yet.</p>
      <h3>Be The First To Review "Fresh Mango 1Kg"</h3>
      <p>Your email address will not be published. Required fields are marked *</p>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="review-rating">
          <strong>Your rating</strong>
          <div >
            {[1, 2, 3, 4, 5].map((index) => (
              <span key={index} onClick={() => handleRating(index)}>
                {index <= rating ? "⭐" : "☆"}
              </span>
            ))}
          </div>
        </div>

        <div className="review-labels">
          <label>Your review *</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            rows="4"
          />
        </div>

        <div className="review-labels">
          <label>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="review-labels">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="review-save-details">
          <input
            type="checkbox"
            checked={saveDetails}
            onChange={() => setSaveDetails(!saveDetails)}
          />
          <label> Save my name, email, and website in this browser for the next time I comment.</label>
        </div>

        <button type="submit" className="review-submit-btn" >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
