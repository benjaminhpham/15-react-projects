import { useState } from "react";

export default function Tour({ id, image, info, price, name, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article>
      <br />
      <img src={image} alt={name} height={500} width={700} />
      <div>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 100)}...`}
        <span onClick={() => setReadMore((prev) => !prev)}>
          {readMore ? " Show Less" : " Read More"}
        </span>
      </p>
      <button onClick={() => removeTour(id)}>Not Interested</button>
      <hr />
    </article>
  );
}
