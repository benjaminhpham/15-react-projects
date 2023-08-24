import { useState } from "react";
import data from "./data";
import MenuItem from "./MenuItem";

export default function MenuDisplayItem() {
  const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState("");

  // capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const categoryButtons = [
    "All",
    ...new Set(menu.map((item) => capitalizeFirstLetter(item.category))),
  ];

  const handleClick = (e) => {
    const categoryType = e.target.innerText.toLowerCase();
    setCategory(categoryType);
  };

  const filteredMenu =
    category === "all"
      ? menu
      : menu.filter((item) => item.category === category);

  return (
    <main>
      <h2>Our Menu</h2>
      <section>
        {categoryButtons.map((btn, index) => (
          <button key={index} onClick={handleClick}>
            {btn}
          </button>
        ))}
      </section>
      <section>
        {filteredMenu.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </section>
    </main>
  );
}
