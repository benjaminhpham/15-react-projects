export default function MenuItem({ title, category, price, desc }) {
  return (
    <article>
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>{price}</h4>
      <p>{desc}</p>
    </article>
  );
}
