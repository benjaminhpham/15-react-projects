import { useState } from "react";
import data from "./data";
import Review from "./Review";

export default function Reviews() {
  // There are 4 objects within data array
  const [reviews, setReviews] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const generateRandomIndex = () => {
    // randomly generate an index between 0 and reviews.length - 1
    return Math.floor(Math.random() * reviews.length);
  };

  const handleSurprise = () => {
    let randomIndex;
    do {
      // generate a randomIndex that doesn't match the selectedIndex
      randomIndex = generateRandomIndex();
    } while (randomIndex === selectedIndex);

    setSelectedIndex(randomIndex);
  };

  return (
    <section>
      <h2>Our Reviews</h2>
      <Review {...reviews[selectedIndex]} />
      <div>
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
      </div>
      <button onClick={handleSurprise}>Surprise</button>
    </section>
  );
}
