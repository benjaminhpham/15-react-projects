import { useState } from "react";
import data from "./data";
import MenuItem from "./MenuItem";

const SearchForm = ({ query, setQuery }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search Item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default function MenuDisplayItem() {
  const [menu] = useState(data);
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

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

  const filterByCategory = () => {
    return menu.filter((item) => item.category === category);
  };

  const filterByQuery = () => {
    return menu.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterByCategoryAndQuery = () => {
    return menu.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) &&
        item.category === category
    );
  };

  const filterMenu = () => {
    if (query === "") {
      if (category === "all") {
        return menu;
      }
      return filterByCategory();
    } else {
      if (category === "all") {
        return filterByQuery();
      }
      return filterByCategoryAndQuery();
    }
  };

  return (
    <main>
      <h2>Our Menu</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <section>
        {categoryButtons.map((btn, index) => (
          <button key={index} onClick={handleClick}>
            {btn}
          </button>
        ))}
      </section>
      <section>
        <ol>
          {filterMenu().map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ol>
      </section>
    </main>
  );
}
