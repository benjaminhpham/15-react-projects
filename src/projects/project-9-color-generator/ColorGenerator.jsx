import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const componentToHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default function ColorGenerator() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      if (colors) {
        setError(false);
        setList(colors);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <main>
      <section className="container">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            style={error ? { borderColor: "red" } : null}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} />
        ))}
      </section>
    </main>
  );
}
