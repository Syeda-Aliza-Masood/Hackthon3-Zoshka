"use client";
import { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Subfooter from "@/Components/Subfooter";

export default function ReviewSection() {
  const [reviews, setReviews] = useState<{ name: string; review: string }[]>([]);
  const [newName, setNewName] = useState("");
  const [newReview, setNewReview] = useState("");

  // Load reviews from local storage when the component mounts
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Handle the review submission
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName.trim() && newReview.trim()) {
      const updatedReviews = [...reviews, { name: newName, review: newReview }];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save reviews to local storage
      setNewName(""); // Clear the name input
      setNewReview(""); // Clear the review input
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar here */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">Customer Reviews</h2>

          {/* Review Form inside a Card */}
          <div className="max-w-md mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-md mb-4"
                placeholder="Your Name"
                required
              />
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="w-full h-32 p-4 border border-gray-300 rounded-md mb-4"
                placeholder="Share your review..."
                required
              />
              <button
                type="submit"
                className="w-full bg-[#B88E2F] text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Display Reviews */}
          <div className="space-y-6 mt-8">
            {reviews.length === 0 ? (
              <p className="text-center text-gray-600">No reviews yet. Be the first to review!</p>
            ) : (
              reviews.map((review, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold text-black">{review.name}</p>
                  <p className="text-gray-600">{review.review}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Subfooter /> {/* Add SubFooter here */}
      <Footer /> {/* Add Footer here */}
    </>
  );
}
