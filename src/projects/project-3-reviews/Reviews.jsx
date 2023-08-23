import { useState } from "react";
import data from "./data";
import Review from "./Review";

export default function Reviews() {
  const [reviews, setReviews] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    setSelectedIndex((prev) => {
      if (prev < reviews.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * (reviews.length - 1) + 1);
    setSelectedIndex(randomIndex);
  };

  return (
    <section>
      <h2>Our Reviews</h2>
      <Review {...reviews[selectedIndex]} />
      <div>
        <button onClick={handleClick}>{"<"}</button>
        <button onClick={handleClick}>{">"}</button>
      </div>
      <button onClick={handleSurprise}>Surprise</button>
    </section>
  );
}
