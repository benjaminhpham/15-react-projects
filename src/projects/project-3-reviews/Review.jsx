import React from "react";

export default function Review({ id, image, job, name, text }) {
  return (
    <article>
      <img src={image} alt={name} height={300} width={360} />
      <h3>{name}</h3>
      <h4>{job}</h4>
      <p>{text}</p>
    </article>
  );
}
