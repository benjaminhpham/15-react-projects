import { useState } from "react";

export default function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article>
      <header>
        <h4>
          {title}
          <button onClick={() => setShowInfo((prev) => !prev)}>
            {showInfo ? "-" : "+"}
          </button>
        </h4>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}
